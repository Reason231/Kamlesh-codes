

## Crud operation which is used in the database
1. Create
2. Read
3. Update
4. Delete

## Create 
1.  To create the single data in your databse => db.users.insertOne({name:"Reason", email:"@gmail.com"})
- Example => db.users.insertOne({name: "Reason Khadgi", email:"@gmail.com" , address:"Kathmandu"})
  Output  =>        {
                    acknowledged: true,
                    insertedId: ObjectId('666f95c57eb6f639e8cdcdf6')
                    }

2. To create the many data in your databse => db.users.insertMany([{your datas}, {your datas}])  
- Go to json data ai website
- Write the datas that you need
- Go the compress data json and paste that json data ai code
- After that copy the code and paste it in the terminal such as =>db.users.insertMany(paste the code)


---------------------------------------------------------------------------------------------------------------------------------------------
## Read 
- To read the data from your database => db.users.find()
- To read the data which is in the index 0 => db.users.findOne()

## Read with aguments which we learned in the 18th June
- Syntax => db.users.find(query, projection, option)

1. First agument i.e query
 - To filter the data i.e fetching the data under the condition => db.users.find(query)
      - There are two types of filter i.e. 
          1. {key:value} . For eg: db.users.find({role:'admin'})
          2. key: {$operationName:value} . for eg: db.users.find({gt:20})
- query operatiors i.e operationName => $gt, $gte, $lt, $eq, $ne , $nin ,$or , $and


2. Second argument i.e projection
 -  To find the keys means keys bata hami lea data paunu such as address, phone , email
      - syntax => db.users.find({filter, projection})
      - db.users.find({}, {name:1, email:1, _id:0})  => in this we made the filter argument null


3. Third argument i.e options 
-  To sort the values of keys such as in ascending(ASC) and descending order. There are alots of soring 
      - db.users.find({}, {name:1, email:1, _id:0} ,{sort:{name:ASC}}) 
      - db.users.find({}, {name:1, email:1, _id:0} ,{sort:{name:ASC, email:DESC}}) 

-  To limit that how many data we want
      - db.users.find({}, {name:1, email:1, _id:0} ,{sort:{name:ASC, email:DESC}, limit:3})

- To skip the data like malai first ko 3 oota data skip garnu paryo
      - db.users.find({}, {name:1, email:1, _id:0} ,{sort:{name:ASC, email:DESC}, limit:3, skip:3})
      

-----------------------------------------------------------------------------------------------------------------------------------------
## Update
- db.<collectionName>.updateOne(filter,updatebody,option)
      Example 1 => db.users.updateOne({_id:Yesma ma chai update garni ko object_id halni}, {$set:{role:"admin" , phone:981317489}})
                => Output should come in ture,null, 1, 1, 0
- db.<collectionName>.updateMany(filter,updatebody,option)

## Delete 
- db.<collectionName>.deleteOne(filter)
- db.<collectionName>.deleteMany(filer)


### Core integration
 - mongodb package
    - db operate

