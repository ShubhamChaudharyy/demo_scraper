const app=require('express')()
const cheerio=require('cheerio')
const axios=require('axios')
const nightmare=require('nightmare')()
app.listen(5000,()=>{
    console.log('Tension ku leriya h.......kyuki server chalriya h')
})
app.get('/getdata',async (req,res)=>{
     await axios.get('https://www.instagram.com/_vidhiangrish_/')
    .then(response=>{
        var html=cheerio.load(response)
        var $=cheerio.load(response.data)
        var string=$("meta[property='og:description']").attr("content")
        var final_args=string.split(' - ')[0].split(', ');
        console.log(final_args[0])
        console.log(final_args[1])
        console.log(final_args[2])    
    })
})
// app.get('/getdata',async(req,res)=>{
//         tag();
//         async function tag(){
//             var urlroot="https://www.instagram.com/p/CCxgG9zJZpp/?hl=en";
//             const urx=await nightmare.goto(urlroot)
//             .wait('a[href]')
//             .evaluate(() => document.querySelectorAll("a[href$='/_vidhiangrish_/followers/']"))
//             .end()
//             console.log(urx)
//         }
//     })
