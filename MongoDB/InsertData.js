let users = [
    {name: 'Kartik', subject: 'Web Development'},
    {name: 'Monu', subject: 'Java'},
    {name: 'Mosina', subject: 'C++'},
    {name: 'Varun', subject: 'Data Science'}
]

[{name: 'Mosina', subject: 'C++'},
{name: 'Varun', subject: 'Data Science'}]

let products = [
    {name:'Laptop',features:['Touchpad','i-6'],company:'Dell',price:20},
    {name:'Laptop',features:['4K Screen','i-7'],company:'HP',price:30},
    {name:'Laptop',features:['SSD','i-9'],company:'Apple',price:100},
    {name:'Laptop',features:['Antiglare','i-7'],company:'Lenovo',price:50},
    {name:'Mobile',features:['Touchscreen','256GB'],company:'Samsung'},
    {name:'Keyboard',features:['RGB lighting','Mechanical'],company:'Logitech'}
]

db.createCollection('characters')

db.characters.insertMany([
    {name:'Sherlock'},
    {name:'Hobbit'},
    {name:'Jhethalal'},
    {name:'Goku'},
    {name:'Jackie Chan'},
    {name:'Vegeta'},
    {name:'Shinchan'},
    {name:'Iron Man'},
    {name:'Thanos'},
    {name:'Spiderman'},
    {name:'Black Widow'},
    {name:'Jack Sparrow'},
    {name:'Indiana Jones'},
    {name:'Hulk'},
    {name:'Superman'},
    {name:'Flash'},
    {name:'Batman'},
    {name:'Woody'},
    {name:'Joker'},
    {name:'Cody'},
    {name:'Harry Potter'},
]);

db.characters.find();//only first 20 items

db.characters.find().toArray()//all data

db.characters.find().forEach((character)=>{printjson(character)});//all data


let products = [
    {name:'Laptop',features:['Touchpad','i-6'],company:'Dell',price:120},
    {name:'Laptop',features:['4K Screen','i-7'],company:'HP',price:30},
    {name:'Laptop',features:['SSD','i-9'],company:'Apple',price:100},
    {name:'Laptop',features:['Antiglare','i-7'],company:'Lenovo',price:50},
    {name:'Mobile',features:['Touchscreen','256GB'],company:'Samsung'},
    {name:'Keyboard',features:['RGB lighting','Mechanical'],company:'Logitech'}
]

db.products.updateOne({
    features:'Touchpad'
},
{
    $set:{price:120}
});

db.products.updateMany({
    name:{
        $ne:'Laptop'
    }
},
{
    $set:{
        price: 99
    }
});

db.characters.find().limit(5)

db.characters.find().skip(5).limit(5)

db.teachers.deletemany({})// deletes everything inside the collection
//but NOT the collection, to delete collection
db.teachers.drop();

db.characters.deleteOne({name:'Jackie Chan'});


[
    {
        name: 'Kartik', subject: 'Web Development',
        company:{
            name: 'Coding Blocks',
            country: 'India',
            state: 'Delhi',
            address:'47 Nishant Kunj, Pitampura, Delhi-110034'
        }
    },
    {
        name: 'Monu', subject: 'Java',
        company:{
            name: 'Codeskiller',
            country: 'US',
            address:'47 US Kunj, Pitampura, US-110034'
        }
    },
    {
        name: 'Mosina', subject: 'C++',
        company:{
            name: 'Hacker Blocks',
            country: 'Australia',
            address:'47 Australia Kunj, Pitampura, Australia-110034'
        }
    },
    {
        name: 'Varun', subject: 'Data Science',
        company:{
            name: 'Online Coding Blocks',
            country: 'Canada',
            address:'47 Canada Kunj, Pitampura, Canada-110034'
        }
    }
]

db.teachers.find({name:'Monu'}).toArray()//array
db.teachers.find({name:'Monu'}).toArray()[0]//object
db.teachers.find({name:'Monu'}).toArray()[0].company//can only be used on the object


// for updating 1 to 1 mapping
db.teachers.updateOne(
    {
        _id: ObjectId('65e005b769a24661d1df2bed')
    },
    {
        $set:{
            laptop: {name:'MacBook Pro',features:['Touchpad','i-6'],company:'Apple',price:120}
        }
    }
)

let products = [
    {name:'Dell',features:['Touchpad','i-6'],price:120},
    {name:'HP',features:['4K Screen','i-7'],price:30},
    {name:'MacBook Pro',features:['SSD','i-9'],price:100},
    {name:'Lenovo',features:['Antiglare','i-7'],price:50}
]

//using different collections for mapping
[
    {
      _id: ObjectId('65e00a8269a24661d1df2bf1'),
      name: 'Kartik',
      subject: 'Web Development'
    },
    {
      _id: ObjectId('65e00a8269a24661d1df2bf2'),
      name: 'Monu',
      subject: 'Java'
    },
    {
      _id: ObjectId('65e00a8269a24661d1df2bf3'),
      name: 'Mosina',
      subject: 'C++'
    },
    {
      _id: ObjectId('65e00a8269a24661d1df2bf4'),
      name: 'Varun',
      subject: 'Data Science'
    }
  ]

  [
    {
      _id: ObjectId('65e00be369a24661d1df2bf5'),
      name: 'Dell',
      features: [ 'Touchpad', 'i-6' ],
      price: 120
    },
    {
      _id: ObjectId('65e00be369a24661d1df2bf6'),
      name: 'HP',
      features: [ '4K Screen', 'i-7' ],
      price: 30
    },
    {
      _id: ObjectId('65e00be369a24661d1df2bf7'),
      name: 'MacBook Pro',
      features: [ 'SSD', 'i-9' ],
      price: 100
    },
    {
      _id: ObjectId('65e00be369a24661d1df2bf8'),
      name: 'Lenovo',
      features: [ 'Antiglare', 'i-7' ],
      price: 50
    }
  ]

  db.teachers.updateOne(
    {
        _id: ObjectId('65e00a8269a24661d1df2bf1')
    },
    {
        $set:{
            productId: ObjectId('65e00be369a24661d1df2bf5')
        }
    }
  )

db.teachers.aggregate({
    $lookup:{
        from: 'products',
        localField: 'productId',
        foreignField:'_id',
        as:'productDetails'
    }
})  

db.teachers.updateMany({},{$unset:{productId:1}})//removing the foreign key

//one to many
db.teachers.updateOne(
    {
        _id: ObjectId('65e00a8269a24661d1df2bf1')
    },
    {
        $set:{
            productIds: [
                ObjectId('65e00be369a24661d1df2bf5'),
                ObjectId('65e00be369a24661d1df2bf6')
            ]
        }
    }
  )

  db.teachers.aggregate({
    $lookup:{
        from: 'products',
        localField: 'productIds',
        foreignField:'_id',
        as:'productDetails'
    }
})  

//Many to Many

db.createCollection('actors');
db.actors.insertMany([
    {name:'Sheldon'},
    {name:'Penny'}
])

db.createCollection('movies');
db.movies.insertMany([
    {name:'Big Bang Theory'},
    {name:'Young Sheldon'}
])

db.createCollection('actors_movies');

actorId: ObjectId('65e0182d69a24661d1df2bf9'), ObjectId('65e0182d69a24661d1df2bfa')
movieId: ObjectId('65e0183969a24661d1df2bfb'), ObjectId('65e0183969a24661d1df2bfc')

db.actors_movies.insertMany([
    {
        actorId: ObjectId('65e0182d69a24661d1df2bf9'),
        movieId: ObjectId('65e0183969a24661d1df2bfb')
    },
    {
        actorId: ObjectId('65e0182d69a24661d1df2bf9'),
        movieId: ObjectId('65e0183969a24661d1df2bfc')
    },
    {
        actorId: ObjectId('65e0182d69a24661d1df2bfa'),
        movieId: ObjectId('65e0183969a24661d1df2bfb')
    }
])

db.actors_movies.aggregate(
    {
        $lookup:{
            from: 'actors',
            localField: 'actorId',
            foreignField:'_id',
            as:'actorDetails'
        }
    },
    {
        $lookup:{
            from: 'movies',
            localField: 'movieId',
            foreignField:'_id',
            as:'movieDetails'
        }
    }
)  
