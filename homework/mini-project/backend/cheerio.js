import axios from 'axios'
import cheerio from 'cheerio'


export async function createSiteAPI(mydata) {
    
    const aaa = await axios.get(mydata)
    const $ = cheerio.load(aaa.data)
    
    const title1 = $('meta[property="og:title"]').attr('content')
    const desc1 = $('meta[property="og:description"]').attr('content')
    const image1 = $('meta[property="og:image"]').attr('content')
           
    const ogChildren = {

        "title": title1,
        "description": desc1,
        "image": image1
    }
        
    return ogChildren;
}

