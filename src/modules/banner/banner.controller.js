class BannerController{
    bannerCreate=(request,response)=>{
        response.json({
            result:request.body,
            message:"Banner created",
            meta:null
        })
    }
    bannerList=(request,response)=>{
        response.json({
            result:{
                id:"user1",
                title:"User List",
                link:"https.userlink.com",
                images:""
            },
            message:"All banner list",
            meta:null
        })
    }


    bannerDetail=(request,response)=>{
        const params=request.params;
        response.json({
            result:{
                params:params,
                title:"user Details",
                link:"https.userdetails.com",
                image:""
            },
            message:"Banner detail",
            meta:null
        })
    }

    bannerEdit=(request,response)=>{
        const params=request.params;
        response.json({
            result:{
                result:request.body,
                params:params
            },
            message:"Banner editied",
            meta:null
        })
    }

    bannerDelete=(request,response)=>{
        response.json({
            result:"",
            message:"Banner deleted",
            meta:null
        })
    }
}

const bannerCtrl=new BannerController()
module.exports=bannerCtrl
