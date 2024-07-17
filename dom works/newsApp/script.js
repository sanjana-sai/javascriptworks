const APIKEY="d05aeaeacec340c4915ced65d25385e9"

let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${APIKEY}`


//https://newsapi.org/v2/top-headlines?country=in&apiKey=d05aeaeacec340c4915ced65d25385e9


const news={
    "status": "ok",
    "totalResults": 38,
    "articles": [
      {
        "source": {
          "id": null,
          "name": "Zoom"
        },
        "author": "Akanksha Arora",
        "title": "As Dengue Cases Double Than Last Year, Expert Weighs In On Why India Needs A Vaccine - Times Now",
        "description": "This mosquito-borne viral infection, is transmitted primarily by Aedes mosquitoes, which breed in stagnant water. The spike in cases has been attributed to several factors, including climate change, rapid urbanization, and inadequate mosquito control measures.",
        "url": "https://www.timesnownews.com/health/as-dengue-cases-double-than-last-year-expert-weighs-in-on-why-india-needs-a-vaccine-article-111755692",
        "urlToImage": "https://static.tnn.in/thumb/msid-111755643,thumbsize-21128,width-1280,height-720,resizemode-75/111755643.jpg?quality=100",
        "publishedAt": "2024-07-15T16:30:00Z",
        "content": "As Dengue Cases Double Than Last Year, Expert Weighs In On Why India Needs A Vaccine. (Image credits: iStock)"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "TOI Science Desk",
        "title": "'Could be 100 more': Scientists discover cave on moon that can be used to shelter future astronauts - The Times of India",
        "description": "Science News: Scientists uncover a large cave near the historic Apollo 11 landing site on the Moon. Radar data reveals potential for hundreds more caves offering na",
        "url": "https://timesofindia.indiatimes.com/home/science/could-be-100-more-scientists-discover-cave-on-moon-that-can-be-used-to-shelter-future-astronauts/articleshow/111761069.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-111761542,width-1070,height-580,imgsize-58872,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2024-07-15T15:13:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Business Standard"
        },
        "author": "BS Tech",
        "title": "Tech wrap Jul 15: iQOO Z9 Lite, Marshall Major V, Amkette Evofox Deck, more - Business Standard",
        "description": "iQOO Z9 Lite is a fresh entrant in budget 5G smartphones segment in India. Marshall launches Major V on-ear type headphones. Amkette introduces EvoFox Deck gamepad for smartphones",
        "url": "https://www.business-standard.com/technology/tech-news/tech-wrap-jul-15-iqoo-z9-lite-marshall-major-v-amkette-evofox-deck-more-124071500732_1.html",
        "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/15/thumb/fitandfill/400X400/1721041818-0844.png",
        "publishedAt": "2024-07-15T14:33:51Z",
        "content": "iQOO Z9 Lite is a fresh entrant in budget 5G smartphones segment in India. Marshall launches Major V on-ear type headphones. Amkette introduces EvoFox Deck gamepad for smartphones\r\nTech wrap Jul 15\r\n… [+4010 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "The Indian Express"
        },
        "author": "The Indian Express",
        "title": "Of 25 Zika cases in Maharashtra, 21 reported from Pune - The Indian Express",
        "description": null,
        "url": "https://indianexpress.com/article/cities/pune/zika-cases-maharashtra-reported-pune-9455077/",
        "urlToImage": null,
        "publishedAt": "2024-07-15T14:21:58Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "Aditi Srivastava",
        "title": "Video shows Trump’s supporters pointing at the shooter crawling on the roof, ‘Officer, he is up there…’ - Hindustan Times",
        "description": "Trump narrowly escapes assassination attempt at rally in Pennsylvania. 20-year-old shooter captured on video aiming at Trump.",
        "url": "https://www.hindustantimes.com/world-news/us-news/video-shows-trump-s-supporters-pointing-at-the-shooter-crawling-on-the-roof-officer-he-is-up-there-101721052585016.html",
        "urlToImage": "https://images.hindustantimes.com/img/2024/07/15/1600x900/Trumpsshooter_1721052999681_1721053007970.jpg",
        "publishedAt": "2024-07-15T14:21:22Z",
        "content": "A newly surfaced video from Trumps Pennsylvania rally has captured a tense moment: a gunman was seen crawling on a nearby roof, prompting alarmed fans to shout, \"He's up there.\" The shooter, identifi… [+3123 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Livemint"
        },
        "author": "Anu Sharma, Anubhav Mukherjee",
        "title": "SpiceJet net loss at ₹423 crore for FY24, vs net loss of ₹1,513 crore in FY23 | Company Business News - Mint",
        "description": "SpiceJet has announced its earnings after a gap of more than six months.",
        "url": "https://www.livemint.com/companies/company-results/spicejet-q3-and-q4-results-net-profit-at-rs-127-13-crore-revenue-falls-15-22-to-rs-1-663-52-crore-for-q4fy2024-11721044106122.html",
        "urlToImage": "https://www.livemint.com/lm-img/img/2024/07/15/1600x900/2-0-75067438-spicejet-Aircraft-2C-0_1681389600840_1721054509395.jpg",
        "publishedAt": "2024-07-15T14:11:23Z",
        "content": "Budget carrier SpiceJet has reported its earnings for the December and March quarter after a long wait of more than six months. The airline's consolidated net loss shrank to 423.7 crore for the full … [+3243 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Cgtn.com"
        },
        "author": "CGTN",
        "title": "Global conflicts hinder child vaccination efforts, UN data shows - CGTN",
        "description": "In 2023, the number of children missing out on crucial vaccinations rose significantly due to ongoing global conflicts, according to recent UN data. Around 14.5 million children did not receive essential vaccines such as those for diphtheria, tetanus, and who…",
        "url": "https://news.cgtn.com/news/2024-07-15/Global-conflicts-hinder-child-vaccination-efforts-UN-data-shows-1vgn0H6jRKw/p.html",
        "urlToImage": "https://news.cgtn.com/news/2024-07-15/Global-conflicts-hinder-child-vaccination-efforts-UN-data-shows-1vgn0H6jRKw/img/61b71136c7784dc08334f39c6bac738d/61b71136c7784dc08334f39c6bac738d-1920.png",
        "publishedAt": "2024-07-15T14:09:31Z",
        "content": "The number of children missing out on crucial vaccinations increased in 2023, largely due to ongoing conflicts worldwide, according to new data published on Monday by UN agencies.\r\nAccording to UN es… [+2367 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "Shivendra Kumar",
        "title": "Jio Financial Services Q1 Results: Cons PAT falls 6% YoY to Rs 313 crore, revenue up 1% - The Economic Times",
        "description": "Jio Financial Services Q1 Results: In the most recent quarter, the company's total revenue from operations saw a slight increase to Rs 418 crore compared to the same period last year. However, standalone PAT decreased to Rs 72 crore from Rs 78 crore in the pr…",
        "url": "https://economictimes.indiatimes.com/markets/stocks/earnings/jio-financial-services-q1-results-cons-pat-falls-6-yoy-to-rs-313-crore-revenue-up-1/articleshow/111756556.cms",
        "urlToImage": "https://img.etimg.com/thumb/msid-111756248,width-1200,height-630,imgsize-77916,overlay-etmarkets/photo.jpg",
        "publishedAt": "2024-07-15T13:46:30Z",
        "content": "Jio Financial Services on Monday reported a 6% year-on-year decline in its June quarter net profit to Rs 313 crore versus Rs 332 crore reported by the company in the corresponding period of the last … [+1033 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": null,
        "title": "Boost For Trump, Time For Biden: Expert Explains Assassination Bid Impact - NDTV",
        "description": "The assassination attempt on Donald Trump has provided the Republican leader with a unique opportunity to emerge as a taller leader, US political scientist Ian Bremmer told NDTV in an interview.",
        "url": "https://www.ndtv.com/world-news/donald-trump-assassination-attempt-joe-biden-ian-bremmer-boost-for-trump-time-for-biden-expert-explains-assassination-bid-impact-6110457",
        "urlToImage": "https://c.ndtvimg.com/2024-07/air2iuk8_donald-trump-shooting_625x300_15_July_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100",
        "publishedAt": "2024-07-15T13:46:00Z",
        "content": "Donald Trump's response after the shooting and the iconic image will go down in history, Ian Bremmer said\r\nNew Delhi: The assassination attempt on Donald Trump has provided the Republican leader with… [+5690 chars]"
      },
      {
        "source": {
          "id": "the-hindu",
          "name": "The Hindu"
        },
        "author": "The Hindu",
        "title": "Actor Rakul Preet Singh’s brother Amanpreet Singh arrested in a drug bust by Cyberabad police - The Hindu",
        "description": null,
        "url": "https://www.thehindu.com/news/national/telangana/actor-rakul-preet-singhs-brother-arrested-in-a-drug-bust-by-cyberabad-police/article68406772.ece",
        "urlToImage": null,
        "publishedAt": "2024-07-15T13:33:00Z",
        "content": null
      },
      {
        "source": {
          "id": "the-hindu",
          "name": "The Hindu"
        },
        "author": "The Hindu",
        "title": "What to watch as the Republican National Convention kicks off days after Trump assassination attempt - The Hindu",
        "description": null,
        "url": "https://www.thehindu.com/news/international/first-day-of-republican-national-convention-in-milwaukee-after-trump-assassination-bid/article68406864.ece",
        "urlToImage": null,
        "publishedAt": "2024-07-15T13:22:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": null
        },
        "author": null,
        "title": "ASI finds Ganesh, Brahma, Narasimha images at Bhojshala complex, tells court that ‘existing structure was made from parts of earlier temples’ - The Indian Express",
        "description": "",
        "url": "",
        "urlToImage": null,
        "publishedAt": "2024-07-15T12:55:04Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": "NDTV Sports Desk",
        "title": "Harbhajan Singh, Suresh Raina Blasted By Para-Badminton Star Manasi Joshi For 'Mocking Disabilities'.. - NDTV Sports",
        "description": "Para-badminton star Manasi Joshi was not amused by the Instagram video featuring Harbhajan Singh and Suresh Raina as she slammed the former cricketers for insulting people with physical disabilities.",
        "url": "https://sports.ndtv.com/cricket/harbhajan-singh-suresh-raina-blasted-by-para-badminton-star-manasi-joshi-for-mocking-disabilities-6105738",
        "urlToImage": "https://c.ndtvimg.com/2024-07/cu689v2_sa_625x300_15_July_24.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738",
        "publishedAt": "2024-07-15T12:50:08Z",
        "content": "In a pulsating finale of the inaugural World Championship of Legends, India Champions emerged victorious by defeating arch-rivals Pakistan Champions by five wickets at Edgbaston, Birmingham on Saturd… [+1926 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Investopedia"
        },
        "author": "Nisha Gopalan",
        "title": "Apple, Samsung Smartphone Shipments Up But Chinese Rivals Notch Bigger Gains - Investopedia",
        "description": "Global smartphone shipments by Apple and South Korea's Samsung rose in the second quarter from a year earlier, but their market shares fell as Chinese rivals chalked up bigger gains, IDC data showed.",
        "url": "https://www.investopedia.com/apple-samsung-smartphone-shipments-up-but-chinese-rivals-notch-bigger-gains-8677892",
        "urlToImage": "https://www.investopedia.com/thmb/k87_-dG7bidKCMFWEffPQdt5ASs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-2156402442-99f477c241e94ebfbfb96817f3085639.jpg",
        "publishedAt": "2024-07-15T12:49:43Z",
        "content": "<ul><li>Global smartphone shipments by Apple and South Korea's Samsung rose in the second quarter from a year earlier but their market shares fell, according to data from research firm International … [+1770 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT Sports Desk",
        "title": "Gautam Gambhir's India head coach appointment gets thumbs up from Brett Lee before Sri Lanka tour: ‘He finds a way to…’ - Hindustan Times",
        "description": "Here's what Brett Lee said about Gautam Gambhir, who will make his coaching debut in the Sri Lanka series.  | Crickit",
        "url": "https://www.hindustantimes.com/cricket/gautam-gambhir-india-head-coach-appointment-gets-thumbs-up-from-brett-lee-before-sri-lanka-tour-he-finds-a-way-to-101721043402138.html",
        "urlToImage": "https://images.hindustantimes.com/img/2024/07/15/1600x900/MixCollage-15-Jul-2024-05-17-PM-1271_1721046789143_1721046796657.jpg",
        "publishedAt": "2024-07-15T12:34:46Z",
        "content": "With Gautam Gambhir succeeding Rahul Dravid as India's new head coach, legendary Australian cricketer Brett Lee is convinced that the future of the Indian cricket team is in safe hands. Gambhir was u… [+2457 chars]"
      },
      {
        "source": {
          "id": null,
          "name": "Hindustan Times"
        },
        "author": "HT News Desk",
        "title": "BJP's tally in Rajya Sabha dips to 86, NDA seats below majority mark - Hindustan Times",
        "description": "The BJP has 86 seats after four MPs completed their term, while the NDA led by the party has 101 seats, below the majority mark of 113 in the 245-member House. | Latest News India",
        "url": "https://www.hindustantimes.com/india-news/bjps-tally-in-rajya-sabha-dips-to-86-nda-seats-below-majority-mark-101721044661481.html",
        "urlToImage": "https://images.hindustantimes.com/img/2024/07/15/1600x900/Parliamentarians-in-the-Rajya-Sabha-on-Monday---PT_1719822968001_1721045995780.jpg",
        "publishedAt": "2024-07-15T12:33:06Z",
        "content": "The ruling Bharatiya Janata Party's strength in the Rajya Sabha has dropped to 86 after four of its members completed their term on July 13, marking the first decline in several years.\r\nThe members w… [+2539 chars]"
      },
      {
        "source": {
          "id": "the-times-of-india",
          "name": "The Times of India"
        },
        "author": "etimes.in",
        "title": "Expert shares symptoms of the new COVID variants, FLiRT and LB.1 - The Times of India",
        "description": "Dr. Xand van Tulleken highlights symptoms of new COVID variants FLiRT and LB.1, including fever, cough, and loss of taste. Mutations in these variants",
        "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/expert-shares-symptoms-of-the-new-covid-variants-flirt-and-lb-1/articleshow/111753679.cms",
        "urlToImage": "https://static.toiimg.com/thumb/msid-111753560,width-1070,height-580,imgsize-1084779,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
        "publishedAt": "2024-07-15T12:30:00Z",
        "content": "Dengue: Early signs and preventive measures to stay safe"
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "ThePrint",
        "title": "Pakistan has its ‘fashion moment’ at the Ambani wedding - ThePrint",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiYWh0dHBzOi8vdGhlcHJpbnQuaW4vZ28tdG8tcGFraXN0YW4vcGFraXN0YW4taGFzLWl0cy1mYXNoaW9uLW1vbWVudC1hdC10aGUtYW1iYW5pLXdlZGRpbmcvMjE3NTUxMy_SAWVodHRwczovL3RoZXByaW50LmluL2dvLXRvLXBha2lzdGFuL3Bha2lzdGFuLWhhcy1pdHMtZmFzaGlvbi1tb21lbnQtYXQtdGhlLWFtYmFuaS13ZWRkaW5nLzIxNzU1MTMvP2FtcA?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-15T12:19:33Z",
        "content": null
      },
      {
        "source": {
          "id": "google-news",
          "name": "Google News"
        },
        "author": "The Hindu",
        "title": "Champions Trophy 2025: BCCI should give in writing that government has declined permission to play in Pakistan - The Hindu",
        "description": null,
        "url": "https://news.google.com/rss/articles/CBMiqAFodHRwczovL3d3dy50aGVoaW5kdS5jb20vc3BvcnQvY3JpY2tldC9jaGFtcGlvbnMtdHJvcGh5LTIwMjUtYmNjaS1zaG91bGQtZ2l2ZS1pbi13cml0aW5nLXRoYXQtZ292ZXJubWVudC1oYXMtZGVjbGluZWQtcGVybWlzc2lvbi10by1wbGF5LWluLXBha2lzdGFuL2FydGljbGU2ODQwNjU3OC5lY2XSAa0BaHR0cHM6Ly93d3cudGhlaGluZHUuY29tL3Nwb3J0L2NyaWNrZXQvY2hhbXBpb25zLXRyb3BoeS0yMDI1LWJjY2ktc2hvdWxkLWdpdmUtaW4td3JpdGluZy10aGF0LWdvdmVybm1lbnQtaGFzLWRlY2xpbmVkLXBlcm1pc3Npb24tdG8tcGxheS1pbi1wYWtpc3Rhbi9hcnRpY2xlNjg0MDY1NzguZWNlL2FtcC8?oc=5",
        "urlToImage": null,
        "publishedAt": "2024-07-15T11:58:00Z",
        "content": null
      },
      {
        "source": {
          "id": null,
          "name": "NDTV News"
        },
        "author": null,
        "title": "Ajit Pawar Aide Meets Sharad Pawar To Discuss Maratha Quota, OBC Protest Issues - NDTV",
        "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
        "url": "https://www.ndtv.com/",
        "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
        "publishedAt": "2024-07-15T11:50:00Z",
        "content": null
      }
    ]
  }

displayNews(news)


const categories=["business","entertainment","general","health","science","sports","technology"]

displayCategory(categories)

function displayCategory(categories){
    let data=``
    for (let c of categories){
        data+=`

             <button type="button"value="${c}" class="btn btn-secondary ml-2 mr-5" onclick="fetchNewsByCategory(event)">${c}</button>
                    
               `
    }

    document.querySelector("#category").innerHTML=data

}

function fetchNewsByCategory(event){

    let categoryName=event.target.value

    fetch(`${url}&category=${categoryName}`).then(res=>res.json()).then(data=>displayNews(data))

}

function displayNews(news){

    let htmlData=``

    for (let n of news.articles){

        htmlData+=`<div class="col-6">
    <div class="card">
      <img src="${n.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${n.title}</h5>
        <p class="card-text">${n.description}</p>
      </div>
    </div>
  </div>`

    }

    document.querySelector("#root").innerHTML=htmlData

}