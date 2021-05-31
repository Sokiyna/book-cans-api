const mongoose = require('mongoose');





mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});


const BookSchema = new mongoose.Schema({
    name: String,
    discription: String,
    imge: String, 
});


const UserSchema = new mongoose.Schema({
    email: String,
    books:[BookSchema]
});

const userModel = mongoose.model('books', UserSchema);
// const booksModel1 = mongoose.model('booksII', BookSchema);




function seedBooksCollection(){

    const sokiyna = new userModel({
        email: 'sokiyna.naser@gmail.com',
        books:[
            {
                name:'gone with the wind',
                dicription: 'classic',
                imge:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbFbscfoKvmc9ZTSn-RWO4VtoQReYx1cy4Og&usqp=CAU"

            },
            {
                name:'the alchemist',
                dicription:'novel',
                imge:'https://kbimages1-a.akamaihd.net/32ad8373-9cc5-4c4f-aa82-8155edbc7029/1200/1200/False/the-alchemist-a-graphic-novel.jpg'
            },
            {
                name:'men are from mars women are from venus',
                dicription:'Classic Guide',
                imge:'https://m.media-amazon.com/images/I/51evEGvOpRL.jpg'

            }

        ]
    })
    const hiba = new userModel({
        email: 'salemhiba.hs@gmail.com',
        books: [
            {
                name: 'Night Train to Lisbon',
                description: 'Raimund Gregorius teaches classical languages at a Swiss lycée, and lives a life governed by routine. One day, a chance encounter with a Portuguese woman inspires him to question his life--and leads him to an extraordinary book that will open the possibility of changing it. Inspired by the words of Amadeu de Prado, a doctor whose intelligence and magnetism left a mark on everyone who met him and whose principles led him into a confrontation with Salazars dictatorship, Gergorius boards a train to Lisbon. As Gregorius becomes fascinated with unlocking the mystery of who Prado was, an extraordinary tale unfolds.',
                imge: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/8021/9780802143976.jpg',
            },
            {
                name: 'The Power of Habit : Why We Do What We Do, and How to Change',
                description: 'Why do we do develop habits? And how can we change them',
                imge: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/8479/9781847946249.jpg',
            },
            {
                name: 'And Then There Were None',
                description: 'An exclusive authorized edition of the most famous and beloved stories from the Queen of Mystery ,ten people, each with something to hide and something to fear, are invited to an isolated mansion on Indian Island by a host who, surprisingly, fails to appear. On the island they are cut off from everything but each other and the inescapable shadows of their own past lives. One by one, the guests share the darkest secrets of their wicked pasts. And one by one, they die...',
                imge: 'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9780/0620/9780062073488.jpg',
            }
        ]
    })

    sokiyna.save();
    hiba.save();


}

// seedBooksCollection();


function getBookssHandler(req,res) {
    let userEmail = req.query.email;
    console.log(req.query.email);
    // let {name} = req.query
    userModel.find({email:userEmail},function(err,userModel){
        if(err) {
            return console.log('did not work');
        } else {
            res.send(userModel[0].books)
        }
    })
}


module.exports=getBookssHandler;


