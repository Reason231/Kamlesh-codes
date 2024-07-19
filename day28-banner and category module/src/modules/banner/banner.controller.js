const slugify = require("slugify");
const bannerSvc = require("./banner.service");
const { deleteFile } = require('../../utilites/helpers');

class BannerController {
  #id;
  #banner;

  create = async (req, res, next) => {
    try {
      const data = req.body;
      if (req.file) {
        data.image = req.file.filename;
      }

      data.createdBy = req.authUser._id;

      const banner = await bannerSvc.store(data);

      res.json({
        result: banner,
        message: "Banner Created successfully",
        meta: null,
      });
    } catch (exception) {
      console.error("BannerController | create | exception", exception);
      next(exception);
    }
  };

  index = async (req, res, next) => {
    try {
      const page = +req.query.page || 1;
      const limit = +req.query.limit || 10;
      const skip = (page - 1) * limit;

      // Sorting
      const sorting = { _id: -1 }; // Corrected sorting order

      // Search / Filter
      let filter = {};

      if (req.query.search) {
        filter = {
          $or: [
            { name: new RegExp(req.query.search, "i") },
            { status: new RegExp(req.query.search, "i") },
          ],
        };
      }

      const { data, count } = await bannerSvc.listAllData({
        limit: limit,
        skip: skip,
        sort: sorting,
        filter: filter,
      });

      res.json({
        result: data,
        message: "Banner list",
        meta: {
          currentPage: page,
          total: count,
          limit: limit,
          totalPages: Math.ceil(count / limit),
        },
      });
    } catch (exception) {
      next(exception);
    }
  };

  #validateId = async (req) => {
    try {
      this.#id = req.params.id;
      this.#banner = await bannerSvc.getSingleDataByFilter({
        _id: this.#id,
      });

      if (!this.#banner) {
        throw { status: 404, message: "Banner not found" };
      }
    } catch (exception) {
      throw exception;
    }
  };

  show = async (req, res, next) => {
    try {
      await this.#validateId(req);

      res.json({
        result: this.#banner,
        message: "Banner Detail",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  update = async (req, res, next) => {
    try {
      await this.#validateId(req);

      const data = req.body;
      if (req.file) {
        data.image = req.file.filename;
      }

      const response = await bannerSvc.updateById(this.#id, data);

      // Delete old image file if new image is uploaded
      if (req.file && response.image) {
        deleteFile('./public/uploads/banner/' + response.image); // Corrected path
      }

      res.json({
        result: data, // You may want to return the updated data here
        message: "Banner updated successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };


  delete = async (req, res, next) => {
    try {
      await this.#validateId(req);

      const response = await bannerSvc.deleteById(this.#id);

      // Delete associated image file if it exists
      if (response.image) {
        deleteFile('./public/uploads/banner/' + response.image); // Corrected path
      }

      res.json({
        result: null,
        message: "Banner deleted successfully",
        meta: null,
      });
    } catch (exception) {
      next(exception);
    }
  };

  }

module.exports = new BannerController();
