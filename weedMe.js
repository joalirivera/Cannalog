angular.module("WeedMe",[])
    .controller("WeedController",dcontroller);

function dcontroller() {    
        var dCtrl = this;
        window.dCtrl = dCtrl;
        
        dCtrl.greeting = " Weed Me ";
        dCtrl.icon = null;

        //dCtrl.getLocation = function(){
        //   console.log("loading your royal weediness...");
        //   $http.get('https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/256/{level}/{col}/{row}@2x?access_token=pk.eyJ1Ijoiam9hbGlyaXZlcmEiLCJhIjoiY2lzdGoydHEyMDA0cTJ6czg0cXpicGNwYyJ9.8Y3D8aAepCPT-b9068Ecaw' 
        //   + dCtrl.location + '&APPID=a3112519f4fc305fbf97e9003dc0a402' + '&units=imperial')
        //   .then(function(response){
        //     console.log("response from API:", response.data);
           
           
           dCtrl.searchWeed= function(searchTerm) {
               dCtrl.displayarray = [];
               console.log("Searching for " + searchTerm);
               dCtrl.data.forEach(function(element){
                   if(element.name.includes(searchTerm)){
                       dCtrl.displayarray.push(element)
                   }
               })
           }
            
            
            dCtrl.data= [
        {
            "name": "White Fire Alien",
            "strain type": "Hybrid",
            "ucpc": "9XVU7KVPFZTMVC3L4Z4900000",
            "qualities": "Induces strong cerebral euphoria, has strong anti-inflammatory and anti-spasm properties. Releives stress, insomnia, depression and anxiety",
            "preferred induce time": "Evening and Night",
            "image": "https://www.hipjoynt.com/wp-content/uploads/2016/04/White-Fire-Alien-OG-1-Large.jpg",
            
            },
            {"name": "Sour Diesel",
            "strain type": "Hybrid",
            "ucpc": "9XVU7KVPFZTMVC3L4Z4900000",
            "qualities": "Stimulates mental activity, boosts energy and creativity, improves appetite and mood. May cause arousal and hallucinations, followed by paranoia--not for beginners",
            "preferred induce time": "Day",
            "image": "http://www.thenug.com/sites/default/pub/071414/thenug-rYCuCKeqgn.jpg" ,
            
            },
            
            {"name": "Bubble Gum",
            "strain type": "Hybrid",
            "qualities": "Boosts energy, prompts giggles. Uplifts mood, alleviates depression. Relaxes the body and relieves stresss.",
            "preferred induce time": "Evening or Day",
            "ucpc": "9XVU7KVPFZTMVC3L4Z4900000",
            "link": "",
            "url": "",
            "image": "http://www.thenug.com/sites/default/pub/011215/thenug-MU0yKe2egl.jpg",
            
            },
            
            {"name": "Blue Dream",
            "strain type": "Sativa",
            "qualities": "Relieves stress and nausea. Improves mood, boosts creativity and prompts socialization. May cause dizziness, headaches and paranoia",
            "preferred induce time": "Evening or Morning",
            "ucpc": "9XVU7KVPFZTMVC3L4Z4900000",

            "image": "https://res.cloudinary.com/hzr24uaww/image/upload/s--zpFfT3is--/c_limit,h_600,w_800/v1444856556/images/strain/super-blue-dream/2096/uel8aksy36ncjyqrf4dx.jpg",
            "producer": {
                "name": "Flower of Life Extracts",
                "link": "https://www.cannabisreports.com/api/v1.0/producers/0000000000TMVC30000000000"}
            },
            
            { 
            "name": "Purple Urkle",
            "strain type": "Indica",
            "qualities": "Induces heavy, relaxed, sedative body high",
            "preferred induce time": "Night and Evening",
            "ucpc": "9XVU7KVPFZTMVC3L4Z4900000",
            "link": "",
            "url": "",
            "image": "http://degausspress.com/cpr/strains/querkle.jpg",
            "producer": {
                "name": "Flower of Life Extracts",
                "link": "https://www.cannabisreports.com/api/v1.0/producers/0000000000TMVC30000000000"}
            },
            
           { "name": "Headband",
            "strain type": "Hybrid",
            "qualities": "Induces cerebral euphoria, functional, improves mood, increases creativity, full body relaxation, and increase in appetite",
            "preferred induce time": "Day and Evening",
            "ucpc": "9XVU7KVPFZTMVC3L4Z4900000",
            "image": "https://uploads.medicaljane.com/wp-content/uploads/2012/12/headbandFULL2.jpg",
            "producer": {
                "name": "Flower of Life Extracts",
                "link": "https://www.cannabisreports.com/api/v1.0/producers/0000000000TMVC30000000000"}
            },
            
           { "name": "Grape Ape",
            "strain type": "Hybrid",
            "qualities": "Induces moderate cerebral euphoria followed by deep sedation. Prompts sleepiness and laziness, may cause arousal. Relieves stress.",
            "preferred induce time": "Evening or Night",
            "ucpc": "9XVU7KVPFZTMVC3L4Z4900000",
            "image": "http://stonercentral.net/wp-content/uploads/2016/03/grape-ape-strain-300x200.jpg",
            "producer": {
                "name": "Flower of Life Extracts",
                "link": "https://www.cannabisreports.com/api/v1.0/producers/0000000000TMVC30000000000"}
            },
            
           { "name": "Black Widow",
            "strain type": "Hybrid",
            "qualities": "Induces highly intense cerebral high, strong and euphoric followed by lengthy couch lock and lethargy. Uplifts mood, alleviates depression, relieves stress, promotes sleep",
            "preferred induce time": "Evening or Day",
            "ucpc": "9XVU7KVPFZTMVC3L4Z4900000",
            "link": "",
            "url": "",
            "image": "http://cdn.theweedblog.com/wp-content/uploads/black-widow-marijuana-strain-3.jpg",
            "producer": {
                "name": "Flower of Life Extracts",
                "link": "https://www.cannabisreports.com/api/v1.0/producers/0000000000TMVC30000000000"}
            },
            
            {"name": "Cheese",
            "strain type": "Hybrid",
            "qualities": "Induces euphoric cerebral high followed by strong pain relief. Uplifts mood, relieves stress, stimulates appetite. Promotes sleep. may trigger laziness and couch lock.",
            "preferred induce time": "Night",
            "ucpc": "9XVU7KVPFZTMVC3L4Z4900000",
            "link": "",
            "url": "",
            "image": "",
            "producer": {
                "name": "Flower of Life Extracts",
                "link": "https://www.cannabisreports.com/api/v1.0/producers/0000000000TMVC30000000000"}
            },
            ];
            }