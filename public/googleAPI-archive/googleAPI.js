var doctorName = "Dr. Who?"
var address = "1000 Johnson Ferry Rd NE, Atlanta, GA 30342, USA";
var specialty = "Pediatrics";
//==============================================================================================================================
function initMap() {
  // map options
  var options = {
    zoom: 14,
    center: {
      lat: 33.748995,
      lng: -84.387982
    }
  }
  // make a new map
  var map = new google.maps.Map(document.getElementById('map'), options);
  /*
        // add marker
        var marker = new google.maps.Marker({
          position: {
            lat: 33.909375,
            lng: -84.354616
          },
          map: map,
          icon: "/medicineIcon.png"
        });

        // infoWindow 
        var infoWindow = new google.maps.InfoWindow({
          content: "<h4>" + doctorName + "</h4>" +
            "<h5>Address:" + address + "</h5>" +
            "<h5>Specialty:" + specialty + "</h5>"
        })

        // event listener
        marker.addListener('click', function () {
          infoWindow.open(map, marker);
        });

          <h2>${name}</h2><p>${description}</p>
      <p><b>Open:</b> ${hours}<br/><b>Phone:</b> ${phone}</p>
  */

  addMarkers({
    coords: {
      lat: 33.909375,
      lng: -84.354616
    },
    content: '<h2>Demetria  Aaron</h2><p><b>Address: </b>1000 Johnson Ferry Rd ATLANTA GA 30342-1606<br/><b>Phone: </b>404-303-1224<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h2>Mazen A Abdalla</h2><p><b>Address: </b>80 Jesse Hill Jr Dr SE # OPC ATLANTA GA 30303<br/><b>Phone: </b>404-616-5800<br/><b>Specialty: </b>Internal Medicine, Nephrology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.821058,
      lng: -84.459538
    },
    content: '<h2>Zia A Abdi</h2><p><b>Address: </b>2386 Bolton Rd NWATLANTA GA 30318-1232<br/><b>Phone: </b>404-352-2810<br/><b>Specialty: </b>Family Practice, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.909375,
      lng: -84.354616
    },
    content: '<h2>Richard W Abel</h2><p><b>Address: </b>1000 Johnson Ferry Rd NEATLANTA GA 30342-1611<br/><b>Phone: </b>404-851-8000<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.915066,
      lng: -84.351395
    },
    content: '<h2>Richard W Abel</h2><p><b>Address: </b>5901C Peachtree Dunwoody Rd NESte C-65 ATLANTA GA 30328-5382<br/><b>Phone: </b>404-252-9751<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.9057,
      lng: -84.352067
    },
    content: '<h2>Richard W Abel</h2><p><b>Address: </b>5555 Peachtree Dunwoody Rd NESte 349 ATLANTA GA 30342-1712<br/><b>Phone: </b>404-252-9751<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.929624,
      lng: -84.360531
    },
    content: '<h2>Caroline M Abruzese</h2><p><b>Address: </b>800 Mount Vernon Hwy NESte 160 ATLANTA GA 30328-4295<br/><b>Phone: </b>404-303-8889<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.756539,
      lng: -84.381813
    },
    content: '<h2>Thomas V Adamkiewicz</h2><p><b>Address: </b>75 Piedmont Ave NESte 700 ATLANTA GA 30303-2508<br/><b>Phone: </b>404-756-1400<br/><b>Specialty: </b>Family Medicine, Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.876665,
      lng: -84.265787
    },
    content: '<h2>Thomas V Adamkiewicz</h2><p><b>Address: </b>3020 Mercer University DrSte 100 ATLANTA GA 30341-4145<br/><b>Phone: </b>770-458-3383<br/><b>Specialty: </b>Family Medicine, Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.909637,
      lng: -84.352835
    },
    content: '<h2>Samuel F Adams Jr.</h2><p><b>Address: </b>5670 Peachtree Dunwoody Rd NESuite 1200 ATLANTA GA 30342-1699<br/><b>Phone: </b>404-255-9100<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.611494,
      lng: -84.472726
    },
    content: '<h2>Anthony B Adams</h2><p><b>Address: </b>2575 Jolly RdATLANTA GA 30349-3165<br/><b>Phone: </b>404-767-8886<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.80361,
      lng: -84.394134
    },
    content: '<h2>Rachel  Adams</h2><p><b>Address: </b>1800 Peachtree St NWSte 455 ATLANTA GA 30309-2520<br/><b>Phone: </b>404-419-4400<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Rachel  Adams</h2><p><b>Address: </b>5780 Peachtree Dunwoody RdSte 195 ATLANTA GA 30342-1513<br/><b>Phone: </b>404-256-4667<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h2>Kristan Virginia Adams</h2><p><b>Address: </b>275 Collier Rd NWSuite 100-B ATLANTA GA 30309-1709<br/><b>Phone: </b>404-352-3656<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.753901,
      lng: -84.382009
    },
    content: '<h2>Ira S Adams-Chapman</h2><p><b>Address: </b>35 Jesse Hill Jr Dr SEATLANTA GA 30303-3032<br/><b>Phone: </b>404-616-4390<br/><b>Specialty: </b>Neonatal-Perinatal Medicine, Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h2>Paula  Adamson</h2><p><b>Address: </b>80 Jesse Hill Jr Dr SEATLANTA GA 30303-3031<br/><b>Phone: </b>404-616-5800<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.857363,
      lng: -84.430103
    },
    content: '<h2>Latonia  Addison</h2><p><b>Address: </b>3715 Northside Pkwy NWBuilding 2-100 ATLANTA GA 30327-2809<br/><b>Phone: </b>770-938-1757<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.753901,
      lng: -84.382009
    },
    content: '<h2>Olufolake A Adisa</h2><p><b>Address: </b>35 Jesse Hill Jr Dr SEATLANTA GA 30303-3032<br/><b>Phone: </b>404-785-9850<br/><b>Specialty: </b>Hematology and Oncology, Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h2>Olufolake A Adisa</h2><p><b>Address: </b>80 Jesse Hill Jr Dr SEATLANTA GA 30303-3031<br/><b>Phone: </b>404-616-2501<br/><b>Specialty: </b>Hematology and Oncology, Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.804777,
      lng: -84.331181
    },
    content: '<h2>Laurent  Adler</h2><p><b>Address: </b>1821 Clifton Rd NEATLANTA GA 30329-4021<br/><b>Phone: </b>404-728-6363<br/><b>Specialty: </b>Geriatric Medicine, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751032,
      lng: -84.374453
    },
    content: '<h2>Zahid H Afridi</h2><p><b>Address: </b>424 Decatur St SEATLANTA GA 30312-1848<br/><b>Phone: </b>678-843-8799<br/><b>Specialty: </b>Family Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.68197,
      lng: -84.42652
    },
    content: '<h2>Kingsley E Agbeyegbe</h2><p><b>Address: </b>1151 Cleveland AveSte C ATLANTA GA 30344-3607<br/><b>Phone: </b>404-305-0004<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.754456,
      lng: -84.419277
    },
    content: '<h2>Kingsley E Agbeyegbe</h2><p><b>Address: </b>970 Martin Luther King Jr Dr SWSuite 305 ATLANTA GA 30314-2962<br/><b>Phone: </b>404-524-1721<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.681106,
      lng: -84.426006
    },
    content: '<h2>Kingsley E Agbeyegbe</h2><p><b>Address: </b>1136 Cleveland AveSte 605 ATLANTA GA 30344-3618<br/><b>Phone: </b>404-305-0004<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h2>Carlos A Agudelo</h2><p><b>Address: </b>1364 NE Clifton RdATLANTA GA 30322-1059<br/><b>Phone: </b>404-778-4366<br/><b>Specialty: </b>Internal Medicine, Rheumatology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h2>Carlos A Agudelo</h2><p><b>Address: </b>1364 Clifton Rd NESte AG21 ATLANTA GA 30322<br/><b>Phone: </b>404-778-4366<br/><b>Specialty: </b>Internal Medicine, Rheumatology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h2>Rimsha  Ahmed</h2><p><b>Address: </b>80 Jesse Hill Jr Dr SE - OPCATLANTA GA 30303-3031<br/><b>Phone: </b>404-616-4358<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.792509,
      lng: -84.32038
    },
    content: '<h2>Rimsha  Ahmed</h2><p><b>Address: </b>1365 Clifton Rd NEATLANTA GA 30322-1013<br/><b>Phone: </b>404-778-5000<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h2>Rimsha  Ahmed</h2><p><b>Address: </b>550 Peachtree St NEATLANTA GA 30308-2247<br/><b>Phone: </b>404-686-4411<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.908526,
      lng: -84.349578
    },
    content: '<h2>Rimsha  Ahmed</h2><p><b>Address: </b>5665 Peachtree Dunwoody Rd NEATLANTA GA 30342-1701<br/><b>Phone: </b>678-843-7001<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.910324,
      lng: -84.350352
    },
    content: '<h2>Rimsha  Ahmed</h2><p><b>Address: </b>5673 Peachtree Dunwoody RdATLANTA GA 30342-1731<br/><b>Phone: </b>404-778-3401<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h2>Rimsha  Ahmed</h2><p><b>Address: </b>1364 Clifton Rd NEATLANTA GA 30322-1059<br/><b>Phone: </b>404-712-2000<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.928128,
      lng: -84.362009
    },
    content: '<h2>Kelly J Ahn</h2><p><b>Address: </b>755 Mt Vernon Hwy NESte 500 ATLANTA GA 30328-4280<br/><b>Phone: </b>678-252-6370<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.809054,
      lng: -84.396336
    },
    content: '<h2>Carol T Aitcheson</h2><p><b>Address: </b>105 Collier RdSte 3060 ATLANTA GA 30309-1766<br/><b>Phone: </b>404-367-3070<br/><b>Specialty: </b>Internal Medicine, Rheumatology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.809054,
      lng: -84.396336
    },
    content: '<h2>Carol T Aitcheson</h2><p><b>Address: </b>105 Collier Rd NWSte 3060 ATLANTA GA 30309-1766<br/><b>Phone: </b>404-367-1500<br/><b>Specialty: </b>Internal Medicine, Rheumatology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.753901,
      lng: -84.382009
    },
    content: '<h2>Ekemini E Akan</h2><p><b>Address: </b>35 Jesse Hill Jr Dr SEATLANTA GA 30303-3032<br/><b>Phone: </b>404-785-9850<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.804758,
      lng: -84.414804
    },
    content: '<h2>Ekemini E Akan</h2><p><b>Address: </b>1800 Howell Mill RdSte 550 ATLANTA GA 30318-2538<br/><b>Phone: </b>404-756-1400<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h2>Mikhail Y Akbashev</h2><p><b>Address: </b>80 Jesse Hill Jr Dr SEATLANTA GA 30303-3031<br/><b>Phone: </b>404-616-7440<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h2>Mikhail Y Akbashev</h2><p><b>Address: </b>80 Jesse Hill Jr Dr SE - OPCATLANTA GA 30303-3031<br/><b>Phone: </b>404-616-4358<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.681106,
      lng: -84.426006
    },
    content: '<h2>Fawaz F Akbik</h2><p><b>Address: </b>1136 Cleveland AveSuite 519 ATLANTA GA 30344-3618<br/><b>Phone: </b>404-761-3525<br/><b>Specialty: </b>Internal Medicine, Pulmonary Disease</p>'
  });
  addMarkers({
    coords: {
      lat: 33.725368,
      lng: -84.509416
    },
    content: '<h2>Iyabode F Akinsanya-Beysolow</h2><p><b>Address: </b>3695 Cascade Rd SWSte S ATLANTA GA 30331-2146<br/><b>Phone: </b>404-699-1339<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.884908,
      lng: -84.462796
    },
    content: '<h2>Naomi C Akita</h2><p><b>Address: </b>100 Galleria PkwySte 660 ATLANTA GA 30339-5912<br/><b>Phone: </b>470-771-2436<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.681106,
      lng: -84.426006
    },
    content: '<h2>Mohammad  Al-Mulki</h2><p><b>Address: </b>1136 Cleveland AveSuite 519 ATLANTA GA 30344-3618<br/><b>Phone: </b>404-761-3525<br/><b>Specialty: </b>Internal Medicine, Pulmonary Disease</p>'
  });
  addMarkers({
    coords: {
      lat: 33.793019,
      lng: -84.397095
    },
    content: '<h2>Chad J Aleman</h2><p><b>Address: </b>264 19th St NWSte 2240 ATLANTA GA 30363-1139<br/><b>Phone: </b>404-532-1564<br/><b>Specialty: </b>General Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.871093,
      lng: -84.335356
    },
    content: '<h2>Chad J Aleman</h2><p><b>Address: </b>305 Brookhaven Ave NESte B 1180 ATLANTA GA 30319-7232<br/><b>Phone: </b>404-705-9099<br/><b>Specialty: </b>General Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.792774,
      lng: -84.319424
    },
    content: '<h2>Sunil M Alexander</h2><p><b>Address: </b>1365 Clifton Rd NESte 4100 ATLANTA GA 30322-1013<br/><b>Phone: </b>404-778-3401<br/><b>Specialty: </b>Gynecology, Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h2>Sunil M Alexander</h2><p><b>Address: </b>550 Peachtree St NE9th Floor ATLANTA GA 30308-2247<br/><b>Phone: </b>404-778-3401<br/><b>Specialty: </b>Gynecology, Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.755636,
      lng: -84.38829
    },
    content: '<h2>Sunil M Alexander</h2><p><b>Address: </b>80 Jesse Hill Jr Dr NEOBGYN Dept ATLANTA GA 30303-2613<br/><b>Phone: </b>404-616-4646<br/><b>Specialty: </b>Gynecology, Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h2>Vinita  Alexander</h2><p><b>Address: </b>550 Peachtree St NEATLANTA GA 30308-2247<br/><b>Phone: </b>404-686-4411<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.908526,
      lng: -84.349578
    },
    content: '<h2>Vinita  Alexander</h2><p><b>Address: </b>5665 Peachtree Dunwoody Rd NEATLANTA GA 30342-1701<br/><b>Phone: </b>678-843-7001<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.910324,
      lng: -84.350352
    },
    content: '<h2>Vinita  Alexander</h2><p><b>Address: </b>5673 Peachtree Dunwoody RdATLANTA GA 30342-1731<br/><b>Phone: </b>404-778-3401<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h2>Vinita  Alexander</h2><p><b>Address: </b>80 Jesse Hill Jr Dr SEATLANTA GA 30303-3031<br/><b>Phone: </b>404-616-1000<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h2>Vinita  Alexander</h2><p><b>Address: </b>1364 Clifton Rd NEATLANTA GA 30322-1059<br/><b>Phone: </b>404-712-2000<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.792509,
      lng: -84.32038
    },
    content: '<h2>Vinita  Alexander</h2><p><b>Address: </b>1365 Clifton Rd NEBldg A, 4th Fl ATLANTA GA 30322-1013<br/><b>Phone: </b>404-778-3401<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.92486,
      lng: -84.308751
    },
    content: '<h2>Susana A Alfonso</h2><p><b>Address: </b>4500 N Shallowford RdATLANTA GA 30338-6476<br/><b>Phone: </b>404-778-6920<br/><b>Specialty: </b>Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.753147,
      lng: -84.472472
    },
    content: '<h2>Renee S Allen</h2><p><b>Address: </b>2600 ML King Jr DrATLANTA GA 30311<br/><b>Phone: </b>404-756-1400<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.808755,
      lng: -84.395555
    },
    content: '<h2>Raymond J Allen</h2><p><b>Address: </b>77 Collier Rd NWSte 3130 ATLANTA GA 30309-1754<br/><b>Phone: </b>404-351-3574<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.909375,
      lng: -84.354616
    },
    content: '<h2>Raymond J Allen</h2><p><b>Address: </b>1000 Johnson Ferry Rd NEATLANTA GA 30342-1611<br/><b>Phone: </b>404-851-8988<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.863647,
      lng: -84.307871
    },
    content: '<h2>Renee Anushka Alli</h2><p><b>Address: </b>4166 Buford Hwy NESte 1102 ATLANTA GA 30345-1038<br/><b>Phone: </b>404-785-8160<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h2>Ngozi F Anachebe</h2><p><b>Address: </b>80 Jesse Hill Jr Dr SEATLANTA GA 30303-3031<br/><b>Phone: </b>404-616-4307<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.804758,
      lng: -84.414804
    },
    content: '<h2>Ngozi F Anachebe</h2><p><b>Address: </b>1800 Howell Mill RdSte 275 ATLANTA GA 30318-2538<br/><b>Phone: </b>404-756-1400<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.80361,
      lng: -84.394134
    },
    content: '<h2>Indu S Anand</h2><p><b>Address: </b>1800 Peachtree St NWSte 455 ATLANTA GA 30309-2520<br/><b>Phone: </b>404-419-4400<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Indu S Anand</h2><p><b>Address: </b>5780 Peachtree Dunwoody RdSte 175 ATLANTA GA 30342-1558<br/><b>Phone: </b>678-651-2840<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Indu S Anand</h2><p><b>Address: </b>5780 Peachtree Dunwoody Rd NESuite 195 ATLANTA GA 30342-1554<br/><b>Phone: </b>404-256-4667<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h2>Blake  Anderson</h2><p><b>Address: </b>550 Peachtree St NEATLANTA GA 30308-2247<br/><b>Phone: </b>404-686-8114<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.798465,
      lng: -84.322386
    },
    content: '<h2>Blake  Anderson</h2><p><b>Address: </b>1525 Clifton Rd NE2nd Fl ATLANTA GA 30322<br/><b>Phone: </b>404-778-4451<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.798465,
      lng: -84.322386
    },
    content: '<h2>Blake  Anderson</h2><p><b>Address: </b>1525 Clifton Rd NEATLANTA GA 30322-4200<br/><b>Phone: </b>404-778-4451<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.917874,
      lng: -84.316483
    },
    content: '<h2>Samantha L Anderson</h2><p><b>Address: </b>4360 Chamblee Dunwoody RdSte 370 ATLANTA GA 30341-1081<br/><b>Phone: </b>770-399-5055<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.928128,
      lng: -84.362009
    },
    content: '<h2>Wilson P Andrews Jr.</h2><p><b>Address: </b>755 Mount Vernon Hwy NESte 420 ATLANTA GA 30328-4279<br/><b>Phone: </b>404-255-6335<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.91928,
      lng: -84.350665
    },
    content: '<h2>Valisia A Andrews</h2><p><b>Address: </b>1140 Hammond DrSte I-9120 ATLANTA GA 30328-8132<br/><b>Phone: </b>404-250-3660<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h2>Benjamin L Andrews</h2><p><b>Address: </b>80 Jesse Hill Jr Dr SESte 3J ATLANTA GA 30303<br/><b>Phone: </b>404-616-2590<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.926797,
      lng: -84.359404
    },
    content: '<h2>Stanley R Angus</h2><p><b>Address: </b>6285 Barfield Rd NESuite 250 ATLANTA GA 30328-4335<br/><b>Phone: </b>404-303-7520<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.903747,
      lng: -84.354082
    },
    content: '<h2>Stanley R Angus</h2><p><b>Address: </b>5445 Meridian Marks Rd NESte 350 ATLANTA GA 30342-4763<br/><b>Phone: </b>404-252-5196<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Stanley R Angus</h2><p><b>Address: </b>5780 Peachtree Dunwoody RdSte 175 ATLANTA GA 30342-1558<br/><b>Phone: </b>678-651-2840<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.908526,
      lng: -84.349578
    },
    content: '<h2>Sana H Ansari</h2><p><b>Address: </b>5665 Peachtree Dunwoody RdATLANTA GA 30342-1701<br/><b>Phone: </b>678-843-7001<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h2>Sana H Ansari</h2><p><b>Address: </b>550 Peachtree St NEATLANTA GA 30308-2247<br/><b>Phone: </b>404-778-3401<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.910324,
      lng: -84.350352
    },
    content: '<h2>Sana H Ansari</h2><p><b>Address: </b>5673 Peachtree Dunwoody RdATLANTA GA 30342-1731<br/><b>Phone: </b>404-778-3401<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.792509,
      lng: -84.32038
    },
    content: '<h2>Sana H Ansari</h2><p><b>Address: </b>1365 Clifton Rd NEATLANTA GA 30322-1013<br/><b>Phone: </b>404-778-3401<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h2>Sana H Ansari</h2><p><b>Address: </b>1364 Clifton Rd NEATLANTA GA 30322-1059<br/><b>Phone: </b>404-712-2000<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.857363,
      lng: -84.430103
    },
    content: '<h2>Patrick  Antoine</h2><p><b>Address: </b>3715 Northside Pkwy NWBuilding 2-100 ATLANTA GA 30327-2809<br/><b>Phone: </b>770-938-1757<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.727063,
      lng: -84.391902
    },
    content: '<h2>Patrick  Antoine</h2><p><b>Address: </b>1046 Ridge Ave SWATLANTA GA 30315-1640<br/><b>Phone: </b>404-688-1350<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.908526,
      lng: -84.349578
    },
    content: '<h2>Richard L Antonio</h2><p><b>Address: </b>5665 Peachtree Dunwoody RdSte 200 ATLANTA GA 30342-1701<br/><b>Phone: </b>404-778-7200<br/><b>Specialty: </b>Family Medicine, Sleep Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h2>Richard L Antonio</h2><p><b>Address: </b>550 Peachtree St NEATLANTA GA 30308-2247<br/><b>Phone: </b>404-686-4411<br/><b>Specialty: </b>Family Medicine, Sleep Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.84594,
      lng: -84.31243
    },
    content: '<h2>Raseefa  Anwar</h2><p><b>Address: </b>1875 Century Blvd NESuite 150 ATLANTA GA 30345-3319<br/><b>Phone: </b>404-633-4595<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.873766,
      lng: -84.458532
    },
    content: '<h2>Tracey N Anyanwu</h2><p><b>Address: </b>3330 Cumberland Blvd SESte 500 ATLANTA GA 30339-5997<br/><b>Phone: </b>770-740-2611<br/><b>Specialty: </b>Family Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h2>Jennifer B Aqua</h2><p><b>Address: </b>960 Johnson Ferry Rd NESte 400 ATLANTA GA 30342-1689<br/><b>Phone: </b>404-257-0170<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.892197,
      lng: -84.324868
    },
    content: '<h2>Ryan Carlo Arata</h2><p><b>Address: </b>2154 Johnson Ferry Rd NEATLANTA GA 30319-2558<br/><b>Phone: </b>678-732-1509<br/><b>Specialty: </b>Family Medicine, Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.656307,
      lng: -84.513272
    },
    content: '<h2>Ryan Carlo Arata</h2><p><b>Address: </b>3800 Princeton Lakes Pkwy SWATLANTA GA 30331-5580<br/><b>Phone: </b>678-732-1524<br/><b>Specialty: </b>Family Medicine, Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.910324,
      lng: -84.350352
    },
    content: '<h2>Moji D Ariyo</h2><p><b>Address: </b>5673 Peachtree Dunwoody RdATLANTA GA 30342-1731<br/><b>Phone: </b>404-778-6100<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h2>Eva S Arkin</h2><p><b>Address: </b>960 Johnson Ferry Rd NESte 400 ATLANTA GA 30342-1689<br/><b>Phone: </b>404-257-0170<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h2>Jessica C Arluck</h2><p><b>Address: </b>80 Jesse Hill Jr Dr SEATLANTA GA 30303-3031<br/><b>Phone: </b>404-616-1000<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h2>Jessica C Arluck</h2><p><b>Address: </b>550 Peachtree St NEFl 8 ATLANTA GA 30308-2212<br/><b>Phone: </b>404-686-5000<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.61376,
      lng: -84.44545
    },
    content: '<h2>Gertrude B Arrington</h2><p><b>Address: </b>1720 Phoenix BlvdSuite 900 ATLANTA GA 30349-5594<br/><b>Phone: </b>770-909-8007<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.887645,
      lng: -84.382273
    },
    content: '<h2>April L Artis</h2><p><b>Address: </b>4890 Roswell Rd NESte 250 ATLANTA GA 30342-2606<br/><b>Phone: </b>404-845-1200<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.865608,
      lng: -84.468568
    },
    content: '<h2>Karen S Artress</h2><p><b>Address: </b>2850 Paces Ferry Rd SESte 460-470 ATLANTA GA 30339-5719<br/><b>Phone: </b>678-556-4950<br/><b>Specialty: </b>Family Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.909366,
      lng: -84.349771
    },
    content: '<h2>Harold  Asher</h2><p><b>Address: </b>5669 Peachtree Dunwoody RdSte 240 ATLANTA GA 30342-1794<br/><b>Phone: </b>404-257-0000<br/><b>Specialty: </b>Gastroenterology, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.887644,
      lng: -84.382274
    },
    content: '<h2>Juliet R Asher</h2><p><b>Address: </b>4890 Roswell RdSte 250 ATLANTA GA 30342-2606<br/><b>Phone: </b>404-845-1200<br/><b>Specialty: </b>Family Medicine, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.887644,
      lng: -84.382274
    },
    content: '<h2>Juliet R Asher</h2><p><b>Address: </b>4890 Roswell RdSte 306 ATLANTA GA 30342-2644<br/><b>Phone: </b>404-845-1200<br/><b>Specialty: </b>Family Medicine, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.84198,
      lng: -84.42747
    },
    content: '<h2>Juliet R Asher</h2><p><b>Address: </b>3193 Howell Mill Rd NWSte 104 ATLANTA GA 30327-2100<br/><b>Phone: </b>404-530-9559<br/><b>Specialty: </b>Family Medicine, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Eugenio  Aspuru</h2><p><b>Address: </b>5780 Peachtree Dunwoody Rd NESTE 295 ATLANTA GA 30342-1554<br/><b>Phone: </b>404-255-8022<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Eugenio  Aspuru</h2><p><b>Address: </b>5780 Peachtree Dunwoody RdSte 175 ATLANTA GA 30342-1558<br/><b>Phone: </b>678-651-2840<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Eugenio  Aspuru</h2><p><b>Address: </b>5780 Peachtree Dunwoody Rd NESuite 295 ATLANTA GA 30342-1554<br/><b>Phone: </b>404-255-3633<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.87382,
      lng: -84.263094
    },
    content: '<h2>Matthew R Astin</h2><p><b>Address: </b>3001 Mercer University DrATLANTA GA 30341-4115<br/><b>Phone: </b>678-547-6130<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Stephen M Ayres</h2><p><b>Address: </b>5780 Peachtree Dunwoody Rd NESuite 320 ATLANTA GA 30342-1554<br/><b>Phone: </b>404-256-2943<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Stephen M Ayres</h2><p><b>Address: </b>5780 Peachtree Dunwoody Rd NESte 320 ATLANTA GA 30342-1554<br/><b>Phone: </b>404-256-2943<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Stephen M Ayres</h2><p><b>Address: </b>5780 Peachtree Dunwoody RdSte 175 ATLANTA GA 30342-1558<br/><b>Phone: </b>678-651-2840<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h2>Gordon J Azar Sr.</h2><p><b>Address: </b>960 Johnson Ferry Rd NESte 235 ATLANTA GA 30342-1625<br/><b>Phone: </b>404-256-9572<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h2>Gordon J Azar Sr.</h2><p><b>Address: </b>960 Johnson Ferry RdSte 235 ATLANTA GA 30342-1625<br/><b>Phone: </b>404-256-9572<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Katherine S Babaliaros</h2><p><b>Address: </b>5780 Peachtree Dunwoody Rd NESte 195 ATLANTA GA 30342-1513<br/><b>Phone: </b>770-751-3600<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h2>Katherine S Babaliaros</h2><p><b>Address: </b>275 Collier Rd NWSte 250 ATLANTA GA 30309-1701<br/><b>Phone: </b>404-355-1285<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h2>Katherine S Babaliaros</h2><p><b>Address: </b>275 Collier Rd NWSuite 100-C ATLANTA GA 30309-1709<br/><b>Phone: </b>404-355-0320<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.866271,
      lng: -84.464887
    },
    content: '<h2>Katherine S Babaliaros</h2><p><b>Address: </b>3020 Paces Mill Rd SESte 225 ATLANTA GA 30339-3744<br/><b>Phone: </b>404-355-1285<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Katherine S Babaliaros</h2><p><b>Address: </b>5780 Peachtree Dunwoody Rd NESuite 195 ATLANTA GA 30342-1554<br/><b>Phone: </b>770-751-3600<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.792509,
      lng: -84.32038
    },
    content: '<h2>Martina L Badell</h2><p><b>Address: </b>1365 Clifton Rd NEFl 4 Bldg A ATLANTA GA 30322-1013<br/><b>Phone: </b>404-778-3401<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751671,
      lng: -84.382079
    },
    content: '<h2>Martina L Badell</h2><p><b>Address: </b>80 JESSE HILL JR DR STE OBGYNATLANTA GA 30303<br/><b>Phone: </b>404-616-4646<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h2>Martina L Badell</h2><p><b>Address: </b>550 Peachtree St NE8th Floor ATLANTA GA 30308-2247<br/><b>Phone: </b>404-686-8143<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h2>Runalia  Bahar</h2><p><b>Address: </b>550 Peachtree St NESte 9000 ATLANTA GA 30308<br/><b>Phone: </b>404-686-7869<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h2>Runalia  Bahar</h2><p><b>Address: </b>1364 Clifton Rd NEATLANTA GA 30322-1059<br/><b>Phone: </b>404-712-2000<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.681232,
      lng: -84.424939
    },
    content: '<h2>James K Bailey</h2><p><b>Address: </b>1100 Cleveland AveATLANTA GA 30344-3602<br/><b>Phone: </b>404-688-1350<br/><b>Specialty: </b>Family Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.712706,
      lng: -84.309943
    },
    content: '<h2>James K Bailey</h2><p><b>Address: </b>2578 Gresham RdATLANTA GA 30316-4138<br/><b>Phone: </b>404-241-2336<br/><b>Specialty: </b>Family Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.727063,
      lng: -84.391902
    },
    content: '<h2>James K Bailey</h2><p><b>Address: </b>1046 Ridge Ave SWATLANTA GA 30315-1640<br/><b>Phone: </b>404-688-1350<br/><b>Specialty: </b>Family Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.906413,
      lng: -84.359164
    },
    content: '<h2>Paul T Baird</h2><p><b>Address: </b>875 Johnson Ferry Rd NESte 200 ATLANTA GA 30342-1418<br/><b>Phone: </b>404-778-6100<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h2>Nicolas  Bakinde</h2><p><b>Address: </b>80 Jesse Hill Jr Dr SEATLANTA GA 30303-3031<br/><b>Phone: </b>404-616-9355<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.926544,
      lng: -84.308401
    },
    content: '<h2>Vanitha  Bala</h2><p><b>Address: </b>4575 N Shallowford RdATLANTA GA 30338-6445<br/><b>Phone: </b>404-778-6382<br/><b>Specialty: </b>Gastroenterology, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h2>Vanitha  Bala</h2><p><b>Address: </b>1364 Clifton Rd NESte AG21 ATLANTA GA 30322<br/><b>Phone: </b>404-712-4991<br/><b>Specialty: </b>Gastroenterology, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h2>Vanitha  Bala</h2><p><b>Address: </b>550 Peachtree St NEFl 8 ATLANTA GA 30308-2212<br/><b>Phone: </b>404-778-3401<br/><b>Specialty: </b>Gastroenterology, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h2>Vanitha  Bala</h2><p><b>Address: </b>1364 Clifton Rd NEATLANTA GA 30322-1059<br/><b>Phone: </b>404-686-7869<br/><b>Specialty: </b>Gastroenterology, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h2>Komal D Balaney</h2><p><b>Address: </b>960 Johnson Ferry Rd NESte 300 ATLANTA GA 30342-1689<br/><b>Phone: </b>404-255-7325<br/><b>Specialty: </b>Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.922456,
      lng: -84.359283
    },
    content: '<h2>Ibrez R Bandukwala</h2><p><b>Address: </b>6135 Barfield RdSte 200 ATLANTA GA 30328-4308<br/><b>Phone: </b>404-256-8500<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.809104,
      lng: -84.39305
    },
    content: '<h2>Peter J Barratt</h2><p><b>Address: </b>2001 Peachtree Rd NESte 510 ATLANTA GA 30309-1476<br/><b>Phone: </b>404-355-0320<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h2>Peter J Barratt</h2><p><b>Address: </b>275 Collier Rd NWSuite 100-C ATLANTA GA 30309-1709<br/><b>Phone: </b>404-355-0320<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.857098,
      lng: -84.343072
    },
    content: '<h2>Peter J Barratt</h2><p><b>Address: </b>3925 Peachtree Rd NESte 240 ATLANTA GA 30319-5256<br/><b>Phone: </b>404-355-0320<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.917092,
      lng: -84.349563
    },
    content: '<h2>Robert R Barrett</h2><p><b>Address: </b>5909 Peachtree Dunwoody Rd NESuite 900 ATLANTA GA 30328-8102<br/><b>Phone: </b>404-943-0205<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.753901,
      lng: -84.382009
    },
    content: '<h2>Ezra J Barzilay</h2><p><b>Address: </b>35 Jesse Hill Jr Dr SEATLANTA GA 30303-3032<br/><b>Phone: </b>404-785-9850<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.909637,
      lng: -84.352835
    },
    content: '<h2>Asad  Bashey</h2><p><b>Address: </b>5670 Peachtree Dunwoody Rd NESuite 1000 ATLANTA GA 30342-1704<br/><b>Phone: </b>404-255-1930<br/><b>Specialty: </b>Hematology and Oncology, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.907843,
      lng: -84.35538
    },
    content: '<h2>Stephen T Bashuk</h2><p><b>Address: </b>980 Johnson Ferry Rd NESte 660 ATLANTA GA 30342-1626<br/><b>Phone: </b>404-255-2057<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.917092,
      lng: -84.349563
    },
    content: '<h2>Stephen T Bashuk</h2><p><b>Address: </b>5909 Peachtree Dunwoody Rd NESuite 900 ATLANTA GA 30328-8102<br/><b>Phone: </b>404-943-0205<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.926797,
      lng: -84.359404
    },
    content: '<h2>Christopher E Bassil</h2><p><b>Address: </b>6285 Barfield Rd NESte 250 ATLANTA GA 30328-4321<br/><b>Phone: </b>404-303-1224<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.90735,
      lng: -84.35593
    },
    content: '<h2>Christopher E Bassil</h2><p><b>Address: </b>975 Johnson Ferry Rd NESuite 400 ATLANTA GA 30342-1619<br/><b>Phone: </b>404-943-0205<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.90735,
      lng: -84.35593
    },
    content: '<h2>Christopher E Bassil</h2><p><b>Address: </b>975 Johnson Ferry Rd NESte 400 ATLANTA GA 30342-1619<br/><b>Phone: </b>404-303-7520<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.904583,
      lng: -84.349182
    },
    content: '<h2>Christopher E Bassil</h2><p><b>Address: </b>1519 S Johnson Ferry Rd NESte 175 ATLANTA GA 30319-1694<br/><b>Phone: </b>404-303-7520<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.906734,
      lng: -84.349582
    },
    content: '<h2>Christopher E Bassil</h2><p><b>Address: </b>1100 Johnson Ferry Rd NESte 800 ATLANTA GA 30342-1709<br/><b>Phone: </b>404-303-7520<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Christopher E Bassil</h2><p><b>Address: </b>5780 Peachtree Dunwoody RdSte 175 ATLANTA GA 30342-1558<br/><b>Phone: </b>678-651-2840<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.792509,
      lng: -84.32038
    },
    content: '<h2>Sabreena M Basu</h2><p><b>Address: </b>1365 Clifton Rd NEBldg A 4th Floor ATLANTA GA 30322-1013<br/><b>Phone: </b>404-778-3280<br/><b>Specialty: </b>Endocrinology, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.919417,
      lng: -84.349065
    },
    content: '<h2>Thomas E Bat</h2><p><b>Address: </b>1150 Hammond DrBldg E ATLANTA GA 30328-5334<br/><b>Phone: </b>770-442-1911<br/><b>Specialty: </b>Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.841899,
      lng: -84.426539
    },
    content: '<h2>Thomas E Bat</h2><p><b>Address: </b>3200 Downwood Cir NWSuite 200 ATLANTA GA 30327-1611<br/><b>Phone: </b>770-442-1911<br/><b>Specialty: </b>Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.740184,
      lng: -84.357943
    },
    content: '<h2>Fredly E Bataille</h2><p><b>Address: </b>490 Bill Kennedy Way SESte 101 ATLANTA GA 30316-6835<br/><b>Phone: </b>404-446-4726<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.804814,
      lng: -84.393637
    },
    content: '<h2>Fredly E Bataille</h2><p><b>Address: </b>1800 Peachtree Rd NWSte 400 ATLANTA GA 30309-2514<br/><b>Phone: </b>404-446-4726<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.870077,
      lng: -84.337187
    },
    content: '<h2>Fredly E Bataille</h2><p><b>Address: </b>705 Town Blvd NESuite 560ATLANTA GA 30319-3089<br/><b>Phone: </b>404-446-4726<br/><b>Specialty: </b>Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h2>Dominique F Bayard</h2><p><b>Address: </b>960 Johnson Ferry RdSte 500 ATLANTA GA 30342-1630<br/><b>Phone: </b>404-257-0006<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Dale M Bearman</h2><p><b>Address: </b>5780 Peachtree Dunwoody RdSte 300 ATLANTA GA 30342-1513<br/><b>Phone: </b>404-303-1224<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Dale M Bearman</h2><p><b>Address: </b>5780 Peachtree Dunwoody RdSte 175 ATLANTA GA 30342-1558<br/><b>Phone: </b>678-651-2840<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h2>Dale M Bearman</h2><p><b>Address: </b>5780 Peachtree Dunwoody Rd NESuite 195 ATLANTA GA 30342-1554<br/><b>Phone: </b>404-256-4667<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.928128,
      lng: -84.362009
    },
    content: '<h2>Laura M Beaty</h2><p><b>Address: </b>755 Mount Vernon Hwy NESte 110 ATLANTA GA 30328-4276<br/><b>Phone: </b>404-419-4700<br/><b>Specialty: </b>Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.774155,
      lng: -84.357265
    },
    content: '<h2>Nicholas J Beaulieu</h2><p><b>Address: </b>920 Ponce De Leon Ave NEATLANTA GA 30306-4212<br/><b>Phone: </b>404-815-1957<br/><b>Specialty: </b>Emergency Medicine, Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.6601,
      lng: -84.514436
    },
    content: '<h2>Kelly R Beavers</h2><p><b>Address: </b>3885 Princeton Lakes Way SWSte 306 ATLANTA GA 30331-7100<br/><b>Phone: </b>404-629-9495<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.725753,
      lng: -84.510175
    },
    content: '<h2>Kelly R Beavers</h2><p><b>Address: </b>3699 Cascade Rd SWSte B1 and B2 ATLANTA GA 30331-2163<br/><b>Phone: </b>404-691-7006<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.793186,
      lng: -84.395515
    },
    content: '<h2>Kelly R Beavers</h2><p><b>Address: </b>232 19th St NWSte 7220 ATLANTA GA 30363-1131<br/><b>Phone: </b>404-367-3000<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h2>Rabih I Bechara</h2><p><b>Address: </b>80 Jesse Hill Jr Dr SESte 3J ATLANTA GA 30303<br/><b>Phone: </b>404-616-2590<br/><b>Specialty: </b>Internal Medicine, Pulmonary Disease</p>'
  });
  addMarkers({
    coords: {
      lat: 33.923813,
      lng: -84.3098
    },
    content: '<h2>Teresa L Beck</h2><p><b>Address: </b>11 Dunwoody ParkSte 150 ATLANTA GA 30338-7401<br/><b>Phone: </b>404-778-6922<br/><b>Specialty: </b>Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h2>Nadine A Becker</h2><p><b>Address: </b>960 Johnson Ferry Rd NESte 400 ATLANTA GA 30342-1689<br/><b>Phone: </b>404-257-0170<br/><b>Specialty: </b>Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.738682,
      lng: -84.424611
    },
    content: '<h2>Carla Y. Bedford-Dixon</h2><p><b>Address: </b>1123 Ralph David Abernathy Blvd SWATLANTA GA 30310-1729<br/><b>Phone: </b>404-346-3487<br/><b>Specialty: </b>Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.857363,
      lng: -84.430103
    },
    content: '<h2>Carla Y. Bedford-Dixon</h2><p><b>Address: </b>3715 Northside Pkwy NWBuilding 2-100 ATLANTA GA 30327-2809<br/><b>Phone: </b>770-938-1757<br/><b>Specialty: </b>Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h2>Sally G Beer</h2><p><b>Address: </b>275 Collier Rd NWSte 300 ATLANTA GA 30309-1740<br/><b>Phone: </b>404-355-9815<br/><b>Specialty: </b>Cardiovascular Disease, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.91928,
      lng: -84.350665
    },
    content: '<h2>Sally G Beer</h2><p><b>Address: </b>1140 Hammond Dr NESuite 300 ATLANTA GA 30328-5338<br/><b>Phone: </b>404-851-5400<br/><b>Specialty: </b>Cardiovascular Disease, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.808133,
      lng: -84.395478
    },
    content: '<h2>Sally G Beer</h2><p><b>Address: </b>95 Collier Rd NWSuite 2035 ATLANTA GA 30309-1796<br/><b>Phone: </b>404-605-5161<br/><b>Specialty: </b>Cardiovascular Disease, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.61376,
      lng: -84.44545
    },
    content: '<h2>Sally G Beer</h2><p><b>Address: </b>1720 Phoenix BlvdSte 200 ATLANTA GA 30349-5595<br/><b>Phone: </b>770-997-9924<br/><b>Specialty: </b>Cardiovascular Disease, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.906256,
      lng: -84.4775
    },
    content: '<h2>Sally G Beer</h2><p><b>Address: </b>1900 The Exchange SESuite 100 ATLANTA GA 30339-2022<br/><b>Phone: </b>404-355-9815<br/><b>Specialty: </b>Cardiovascular Disease, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.887645,
      lng: -84.382273
    },
    content: '<h2>Sally G Beer</h2><p><b>Address: </b>4890 Roswell Rd NESuite 100 ATLANTA GA 30342-2606<br/><b>Phone: </b>404-355-9815<br/><b>Specialty: </b>Cardiovascular Disease, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.808133,
      lng: -84.395478
    },
    content: '<h2>Sally G Beer</h2><p><b>Address: </b>95 Collier Rd NWSuite 5015 ATLANTA GA 30309-1796<br/><b>Phone: </b>404-605-5699<br/><b>Specialty: </b>Cardiovascular Disease, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.772558,
      lng: -84.39338
    },
    content: '<h2>Sally G Beer</h2><p><b>Address: </b>150 Bobby Dodd WayHomer Rice Ctr ATLANTA GA 30332-2500<br/><b>Phone: </b>404-355-6562<br/><b>Specialty: </b>Cardiovascular Disease, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.906256,
      lng: -84.4775
    },
    content: '<h2>Sally G Beer</h2><p><b>Address: </b>1900 the Exchange SEBldg 100 Ste 100 ATLANTA GA 30339-2022<br/><b>Phone: </b>404-603-7210<br/><b>Specialty: </b>Cardiovascular Disease, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.725753,
      lng: -84.510175
    },
    content: '<h2>Sally G Beer</h2><p><b>Address: </b>3699 Cascade Rd SWSuite B ATLANTA GA 30331-2163<br/><b>Phone: </b>404-691-7006<br/><b>Specialty: </b>Cardiovascular Disease, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.808133,
      lng: -84.395478
    },
    content: '<h2>Sally G Beer</h2><p><b>Address: </b>95 Collier Rd NWSuite 2055 ATLANTA GA 30309-1796<br/><b>Phone: </b>404-605-5161<br/><b>Specialty: </b>Cardiovascular Disease, Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.860917,
      lng: -84.310338
    },
    content: '<h2>Yohannes A Belachew</h2><p><b>Address: </b>3490 Clairmont Rd NEATLANTA GA 30319-3758<br/><b>Phone: </b>404-477-1218<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.679651,
      lng: -84.4409
    },
    content: '<h2>Denise M Bell-Carter</h2><p><b>Address: </b>1595 Cleveland AveATLANTA GA 30344-3200<br/><b>Phone: </b>404-616-2886<br/><b>Specialty: </b>Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.680608,
      lng: -84.43888
    },
    content: '<h2>Denise M Bell-Carter</h2><p><b>Address: </b>1513 Cleveland AveBuilding 500 ATLANTA GA 30344-6947<br/><b>Phone: </b>404-752-1000<br/><b>Specialty: </b>Family Practice</p>'
  });
  addMarkers({
    coords: {
      lat: 33.809054,
      lng: -84.396336
    },
    content: '<h2>Indumathi  Bendi</h2><p><b>Address: </b>105 Collier Rd NWSuite 1030 ATLANTA GA 30309-1710<br/><b>Phone: </b>404-350-3860<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.905202,
      lng: -84.354452
    },
    content: '<h2>Carolyn M Bennett</h2><p><b>Address: </b>5455 Meridian Marks Rd NESuite 400 ATLANTA GA 30342-1654<br/><b>Phone: </b>404-785-3240<br/><b>Specialty: </b>Pediatric Hematology/Oncology, Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.794087,
      lng: -84.319983
    },
    content: '<h2>Carolyn M Bennett</h2><p><b>Address: </b>1405 Clifton Rd NE4th Fl ATLANTA GA 30322<br/><b>Phone: </b>404-785-6000<br/><b>Specialty: </b>Pediatric Hematology/Oncology, Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.90622,
      lng: -84.353194
    },
    content: '<h2>Carolyn M Bennett</h2><p><b>Address: </b>1001 Johnson Ferry Rd NEATLANTA GA 30342-1605<br/><b>Phone: </b>404-256-5252<br/><b>Specialty: </b>Pediatric Hematology/Oncology, Pediatrics</p>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h2>Adrian Poole Bennett</h2><p><b>Address: </b>275 Collier Rd NWSuite 100-A ATLANTA GA 30309-1709<br/><b>Phone: </b>404-352-1235<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h2>Adrian Poole Bennett</h2><p><b>Address: </b>275 Collier Rd NWSte 100A ATLANTA GA 30309-1700<br/><b>Phone: </b>404-352-1235<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.681232,
      lng: -84.424939
    },
    content: '<h2>Eric A Benning</h2><p><b>Address: </b>1100 Cleveland AveATLANTA GA 30344-3602<br/><b>Phone: </b>404-564-6784<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.727063,
      lng: -84.391902
    },
    content: '<h2>Eric A Benning</h2><p><b>Address: </b>1046 Ridge AveATLANTA GA 30315-1640<br/><b>Phone: </b>404-688-1350<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.712706,
      lng: -84.309943
    },
    content: '<h2>Eric A Benning</h2><p><b>Address: </b>2578 Gresham Rd SEATLANTA GA 30316-4138<br/><b>Phone: </b>404-241-2336<br/><b>Specialty: </b>Internal Medicine</p>'
  });
  addMarkers({
    coords: {
      lat: 33.827743,
      lng: -84.347571
    },
    content: '<h2>Sharon A Bent-Harley</h2><p><b>Address: </b>2678 Buford Hwy NEATLANTA GA 30324-3240<br/><b>Phone: </b>678-904-5999<br/><b>Specialty: </b>Obstetrics and Gynecology</p>'
  });
  addMarkers({
    coords: {
      lat: 33.612301,
      lng: -84.473251
    },
    content: '<h2>Helena K Bentley</h2><p><b>Address: </b>2565 Jolly RdSte A ATLANTA GA 30349-3166<br/><b>Phone: </b>404-765-9437<br/><b>Specialty: </b>Pediatrics</p>'
  });

  // add marker function
  function addMarkers(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: "http://res.cloudinary.com/moodyappcloudname/image/upload/v1525189832/medicineblue.png"
    });

    if (props.content) {
      // infoWindow 
      var infoWindow = new google.maps.InfoWindow({
        content: props.content
      })

      // event listener
      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      });

    }
  }

  // Try HTML5 geolocation.
  infoWindow = new google.maps.InfoWindow;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}


//==============================================================================================================================



var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://maps.googleapis.com/maps/api/geocode/json?address=1051+Tumlin+Street,+30318&key=AIzaSyBv24nYTKrRcTsLRjgwBEcP1OkpwETmmeY",
  "method": "GET",
}

$.ajax(settings).done(function (response) {
  console.log(response);

  var latLng = response.results[0].geometry.location;
  console.log(latLng);
});
//==============================================================================================================================