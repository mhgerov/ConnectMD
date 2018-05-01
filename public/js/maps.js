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
      lng: -87.387982
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
  */
  addMarkers({
    coords: {
      lat: 33.909375,
      lng: -84.354616
    },
    content: '<h4>Demetria  Aaron</h4> <h4>Phone#404-303-1224</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h4>Mazen A Abdalla</h4> <h4>Phone#404-616-5800</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.821058,
      lng: -84.459538
    },
    content: '<h4>Zia A Abdi</h4> <h4>Phone#404-352-2810</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.909375,
      lng: -84.354616
    },
    content: '<h4>Richard W Abel</h4> <h4>Phone#404-851-8000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.915066,
      lng: -84.351395
    },
    content: '<h4>Richard W Abel</h4> <h4>Phone#404-252-9751</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.9057,
      lng: -84.352067
    },
    content: '<h4>Richard W Abel</h4> <h4>Phone#404-252-9751</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.929624,
      lng: -84.360531
    },
    content: '<h4>Caroline M Abruzese</h4> <h4>Phone#404-303-8889</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.756539,
      lng: -84.381813
    },
    content: '<h4>Thomas V Adamkiewicz</h4> <h4>Phone#404-756-1400</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.876665,
      lng: -84.265787
    },
    content: '<h4>Thomas V Adamkiewicz</h4> <h4>Phone#770-458-3383</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.909637,
      lng: -84.352835
    },
    content: '<h4>Samuel F Adams Jr.</h4> <h4>Phone#404-255-9100</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.611494,
      lng: -84.472726
    },
    content: '<h4>Anthony B Adams</h4> <h4>Phone#404-767-8886</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.80361,
      lng: -84.394134
    },
    content: '<h4>Rachel  Adams</h4> <h4>Phone#404-419-4400</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Rachel  Adams</h4> <h4>Phone#404-256-4667</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h4>Kristan Virginia Adams</h4> <h4>Phone#404-352-3656</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.753901,
      lng: -84.382009
    },
    content: '<h4>Ira S Adams-Chapman</h4> <h4>Phone#404-616-4390</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h4>Paula  Adamson</h4> <h4>Phone#404-616-5800</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.857363,
      lng: -84.430103
    },
    content: '<h4>Latonia  Addison</h4> <h4>Phone#770-938-1757</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.753901,
      lng: -84.382009
    },
    content: '<h4>Olufolake A Adisa</h4> <h4>Phone#404-785-9850</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h4>Olufolake A Adisa</h4> <h4>Phone#404-616-2501</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.804777,
      lng: -84.331181
    },
    content: '<h4>Laurent  Adler</h4> <h4>Phone#404-728-6363</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751032,
      lng: -84.374453
    },
    content: '<h4>Zahid H Afridi</h4> <h4>Phone#678-843-8799</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.68197,
      lng: -84.42652
    },
    content: '<h4>Kingsley E Agbeyegbe</h4> <h4>Phone#404-305-0004</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.754456,
      lng: -84.419277
    },
    content: '<h4>Kingsley E Agbeyegbe</h4> <h4>Phone#404-524-1721</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.681106,
      lng: -84.426006
    },
    content: '<h4>Kingsley E Agbeyegbe</h4> <h4>Phone#404-305-0004</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h4>Carlos A Agudelo</h4> <h4>Phone#404-778-4366</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h4>Carlos A Agudelo</h4> <h4>Phone#404-778-4366</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h4>Rimsha  Ahmed</h4> <h4>Phone#404-616-4358</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.792509,
      lng: -84.32038
    },
    content: '<h4>Rimsha  Ahmed</h4> <h4>Phone#404-778-5000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h4>Rimsha  Ahmed</h4> <h4>Phone#404-686-4411</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.908526,
      lng: -84.349578
    },
    content: '<h4>Rimsha  Ahmed</h4> <h4>Phone#678-843-7001</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.910324,
      lng: -84.350352
    },
    content: '<h4>Rimsha  Ahmed</h4> <h4>Phone#404-778-3401</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h4>Rimsha  Ahmed</h4> <h4>Phone#404-712-2000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.928128,
      lng: -84.362009
    },
    content: '<h4>Kelly J Ahn</h4> <h4>Phone#678-252-6370</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.809054,
      lng: -84.396336
    },
    content: '<h4>Carol T Aitcheson</h4> <h4>Phone#404-367-3070</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.809054,
      lng: -84.396336
    },
    content: '<h4>Carol T Aitcheson</h4> <h4>Phone#404-367-1500</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.753901,
      lng: -84.382009
    },
    content: '<h4>Ekemini E Akan</h4> <h4>Phone#404-785-9850</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.804758,
      lng: -84.414804
    },
    content: '<h4>Ekemini E Akan</h4> <h4>Phone#404-756-1400</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h4>Mikhail Y Akbashev</h4> <h4>Phone#404-616-7440</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h4>Mikhail Y Akbashev</h4> <h4>Phone#404-616-4358</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.681106,
      lng: -84.426006
    },
    content: '<h4>Fawaz F Akbik</h4> <h4>Phone#404-761-3525</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.725368,
      lng: -84.509416
    },
    content: '<h4>Iyabode F Akinsanya-Beysolow</h4> <h4>Phone#404-699-1339</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.884908,
      lng: -84.462796
    },
    content: '<h4>Naomi C Akita</h4> <h4>Phone#470-771-2436</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.681106,
      lng: -84.426006
    },
    content: '<h4>Mohammad  Al-Mulki</h4> <h4>Phone#404-761-3525</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.793019,
      lng: -84.397095
    },
    content: '<h4>Chad J Aleman</h4> <h4>Phone#404-532-1564</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.871093,
      lng: -84.335356
    },
    content: '<h4>Chad J Aleman</h4> <h4>Phone#404-705-9099</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.792774,
      lng: -84.319424
    },
    content: '<h4>Sunil M Alexander</h4> <h4>Phone#404-778-3401</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h4>Sunil M Alexander</h4> <h4>Phone#404-778-3401</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.755636,
      lng: -84.38829
    },
    content: '<h4>Sunil M Alexander</h4> <h4>Phone#404-616-4646</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h4>Vinita  Alexander</h4> <h4>Phone#404-686-4411</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.908526,
      lng: -84.349578
    },
    content: '<h4>Vinita  Alexander</h4> <h4>Phone#678-843-7001</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.910324,
      lng: -84.350352
    },
    content: '<h4>Vinita  Alexander</h4> <h4>Phone#404-778-3401</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h4>Vinita  Alexander</h4> <h4>Phone#404-616-1000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h4>Vinita  Alexander</h4> <h4>Phone#404-712-2000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.792509,
      lng: -84.32038
    },
    content: '<h4>Vinita  Alexander</h4> <h4>Phone#404-778-3401</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.92486,
      lng: -84.308751
    },
    content: '<h4>Susana A Alfonso</h4> <h4>Phone#404-778-6920</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.753147,
      lng: -84.472472
    },
    content: '<h4>Renee S Allen</h4> <h4>Phone#404-756-1400</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.808755,
      lng: -84.395555
    },
    content: '<h4>Raymond J Allen</h4> <h4>Phone#404-351-3574</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.909375,
      lng: -84.354616
    },
    content: '<h4>Raymond J Allen</h4> <h4>Phone#404-851-8988</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.863647,
      lng: -84.307871
    },
    content: '<h4>Renee Anushka Alli</h4> <h4>Phone#404-785-8160</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h4>Ngozi F Anachebe</h4> <h4>Phone#404-616-4307</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.804758,
      lng: -84.414804
    },
    content: '<h4>Ngozi F Anachebe</h4> <h4>Phone#404-756-1400</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.80361,
      lng: -84.394134
    },
    content: '<h4>Indu S Anand</h4> <h4>Phone#404-419-4400</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Indu S Anand</h4> <h4>Phone#678-651-2840</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Indu S Anand</h4> <h4>Phone#404-256-4667</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h4>Blake  Anderson</h4> <h4>Phone#404-686-8114</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.798465,
      lng: -84.322386
    },
    content: '<h4>Blake  Anderson</h4> <h4>Phone#404-778-4451</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.798465,
      lng: -84.322386
    },
    content: '<h4>Blake  Anderson</h4> <h4>Phone#404-778-4451</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.917874,
      lng: -84.316483
    },
    content: '<h4>Samantha L Anderson</h4> <h4>Phone#770-399-5055</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.928128,
      lng: -84.362009
    },
    content: '<h4>Wilson P Andrews Jr.</h4> <h4>Phone#404-255-6335</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.91928,
      lng: -84.350665
    },
    content: '<h4>Valisia A Andrews</h4> <h4>Phone#404-250-3660</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h4>Benjamin L Andrews</h4> <h4>Phone#404-616-2590</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.926797,
      lng: -84.359404
    },
    content: '<h4>Stanley R Angus</h4> <h4>Phone#404-303-7520</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.903747,
      lng: -84.354082
    },
    content: '<h4>Stanley R Angus</h4> <h4>Phone#404-252-5196</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Stanley R Angus</h4> <h4>Phone#678-651-2840</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.908526,
      lng: -84.349578
    },
    content: '<h4>Sana H Ansari</h4> <h4>Phone#678-843-7001</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h4>Sana H Ansari</h4> <h4>Phone#404-778-3401</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.910324,
      lng: -84.350352
    },
    content: '<h4>Sana H Ansari</h4> <h4>Phone#404-778-3401</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.792509,
      lng: -84.32038
    },
    content: '<h4>Sana H Ansari</h4> <h4>Phone#404-778-3401</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h4>Sana H Ansari</h4> <h4>Phone#404-712-2000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.857363,
      lng: -84.430103
    },
    content: '<h4>Patrick  Antoine</h4> <h4>Phone#770-938-1757</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.727063,
      lng: -84.391902
    },
    content: '<h4>Patrick  Antoine</h4> <h4>Phone#404-688-1350</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.908526,
      lng: -84.349578
    },
    content: '<h4>Richard L Antonio</h4> <h4>Phone#404-778-7200</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h4>Richard L Antonio</h4> <h4>Phone#404-686-4411</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.84594,
      lng: -84.31243
    },
    content: '<h4>Raseefa  Anwar</h4> <h4>Phone#404-633-4595</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.873766,
      lng: -84.458532
    },
    content: '<h4>Tracey N Anyanwu</h4> <h4>Phone#770-740-2611</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h4>Jennifer B Aqua</h4> <h4>Phone#404-257-0170</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.892197,
      lng: -84.324868
    },
    content: '<h4>Ryan Carlo Arata</h4> <h4>Phone#678-732-1509</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.656307,
      lng: -84.513272
    },
    content: '<h4>Ryan Carlo Arata</h4> <h4>Phone#678-732-1524</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.910324,
      lng: -84.350352
    },
    content: '<h4>Moji D Ariyo</h4> <h4>Phone#404-778-6100</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h4>Eva S Arkin</h4> <h4>Phone#404-257-0170</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h4>Jessica C Arluck</h4> <h4>Phone#404-616-1000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h4>Jessica C Arluck</h4> <h4>Phone#404-686-5000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.61376,
      lng: -84.44545
    },
    content: '<h4>Gertrude B Arrington</h4> <h4>Phone#770-909-8007</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.887645,
      lng: -84.382273
    },
    content: '<h4>April L Artis</h4> <h4>Phone#404-845-1200</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.865608,
      lng: -84.468568
    },
    content: '<h4>Karen S Artress</h4> <h4>Phone#678-556-4950</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.909366,
      lng: -84.349771
    },
    content: '<h4>Harold  Asher</h4> <h4>Phone#404-257-0000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.887644,
      lng: -84.382274
    },
    content: '<h4>Juliet R Asher</h4> <h4>Phone#404-845-1200</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.887644,
      lng: -84.382274
    },
    content: '<h4>Juliet R Asher</h4> <h4>Phone#404-845-1200</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.84198,
      lng: -84.42747
    },
    content: '<h4>Juliet R Asher</h4> <h4>Phone#404-530-9559</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Eugenio  Aspuru</h4> <h4>Phone#404-255-8022</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Eugenio  Aspuru</h4> <h4>Phone#678-651-2840</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Eugenio  Aspuru</h4> <h4>Phone#404-255-3633</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.87382,
      lng: -84.263094
    },
    content: '<h4>Matthew R Astin</h4> <h4>Phone#678-547-6130</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Stephen M Ayres</h4> <h4>Phone#404-256-2943</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Stephen M Ayres</h4> <h4>Phone#404-256-2943</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Stephen M Ayres</h4> <h4>Phone#678-651-2840</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h4>Gordon J Azar Sr.</h4> <h4>Phone#404-256-9572</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h4>Gordon J Azar Sr.</h4> <h4>Phone#404-256-9572</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Katherine S Babaliaros</h4> <h4>Phone#770-751-3600</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h4>Katherine S Babaliaros</h4> <h4>Phone#404-355-1285</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h4>Katherine S Babaliaros</h4> <h4>Phone#404-355-0320</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.866271,
      lng: -84.464887
    },
    content: '<h4>Katherine S Babaliaros</h4> <h4>Phone#404-355-1285</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Katherine S Babaliaros</h4> <h4>Phone#770-751-3600</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.792509,
      lng: -84.32038
    },
    content: '<h4>Martina L Badell</h4> <h4>Phone#404-778-3401</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751671,
      lng: -84.382079
    },
    content: '<h4>Martina L Badell</h4> <h4>Phone#404-616-4646</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h4>Martina L Badell</h4> <h4>Phone#404-686-8143</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h4>Runalia  Bahar</h4> <h4>Phone#404-686-7869</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h4>Runalia  Bahar</h4> <h4>Phone#404-712-2000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.681232,
      lng: -84.424939
    },
    content: '<h4>James K Bailey</h4> <h4>Phone#404-688-1350</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.712706,
      lng: -84.309943
    },
    content: '<h4>James K Bailey</h4> <h4>Phone#404-241-2336</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.727063,
      lng: -84.391902
    },
    content: '<h4>James K Bailey</h4> <h4>Phone#404-688-1350</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.906413,
      lng: -84.359164
    },
    content: '<h4>Paul T Baird</h4> <h4>Phone#404-778-6100</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h4>Nicolas  Bakinde</h4> <h4>Phone#404-616-9355</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.926544,
      lng: -84.308401
    },
    content: '<h4>Vanitha  Bala</h4> <h4>Phone#404-778-6382</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h4>Vanitha  Bala</h4> <h4>Phone#404-712-4991</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.768891,
      lng: -84.385249
    },
    content: '<h4>Vanitha  Bala</h4> <h4>Phone#404-778-3401</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.791883,
      lng: -84.322197
    },
    content: '<h4>Vanitha  Bala</h4> <h4>Phone#404-686-7869</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h4>Komal D Balaney</h4> <h4>Phone#404-255-7325</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.922456,
      lng: -84.359283
    },
    content: '<h4>Ibrez R Bandukwala</h4> <h4>Phone#404-256-8500</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.809104,
      lng: -84.39305
    },
    content: '<h4>Peter J Barratt</h4> <h4>Phone#404-355-0320</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h4>Peter J Barratt</h4> <h4>Phone#404-355-0320</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.857098,
      lng: -84.343072
    },
    content: '<h4>Peter J Barratt</h4> <h4>Phone#404-355-0320</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.917092,
      lng: -84.349563
    },
    content: '<h4>Robert R Barrett</h4> <h4>Phone#404-943-0205</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.753901,
      lng: -84.382009
    },
    content: '<h4>Ezra J Barzilay</h4> <h4>Phone#404-785-9850</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.909637,
      lng: -84.352835
    },
    content: '<h4>Asad  Bashey</h4> <h4>Phone#404-255-1930</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.907843,
      lng: -84.35538
    },
    content: '<h4>Stephen T Bashuk</h4> <h4>Phone#404-255-2057</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.917092,
      lng: -84.349563
    },
    content: '<h4>Stephen T Bashuk</h4> <h4>Phone#404-943-0205</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.926797,
      lng: -84.359404
    },
    content: '<h4>Christopher E Bassil</h4> <h4>Phone#404-303-1224</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.90735,
      lng: -84.35593
    },
    content: '<h4>Christopher E Bassil</h4> <h4>Phone#404-943-0205</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.90735,
      lng: -84.35593
    },
    content: '<h4>Christopher E Bassil</h4> <h4>Phone#404-303-7520</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.904583,
      lng: -84.349182
    },
    content: '<h4>Christopher E Bassil</h4> <h4>Phone#404-303-7520</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.906734,
      lng: -84.349582
    },
    content: '<h4>Christopher E Bassil</h4> <h4>Phone#404-303-7520</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Christopher E Bassil</h4> <h4>Phone#678-651-2840</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.792509,
      lng: -84.32038
    },
    content: '<h4>Sabreena M Basu</h4> <h4>Phone#404-778-3280</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.919417,
      lng: -84.349065
    },
    content: '<h4>Thomas E Bat</h4> <h4>Phone#770-442-1911</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.841899,
      lng: -84.426539
    },
    content: '<h4>Thomas E Bat</h4> <h4>Phone#770-442-1911</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.740184,
      lng: -84.357943
    },
    content: '<h4>Fredly E Bataille</h4> <h4>Phone#404-446-4726</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.804814,
      lng: -84.393637
    },
    content: '<h4>Fredly E Bataille</h4> <h4>Phone#404-446-4726</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.870077,
      lng: -84.337187
    },
    content: '<h4>Fredly E Bataille</h4> <h4>Phone#404-446-4726</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h4>Dominique F Bayard</h4> <h4>Phone#404-257-0006</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Dale M Bearman</h4> <h4>Phone#404-303-1224</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Dale M Bearman</h4> <h4>Phone#678-651-2840</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.912428,
      lng: -84.352941
    },
    content: '<h4>Dale M Bearman</h4> <h4>Phone#404-256-4667</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.928128,
      lng: -84.362009
    },
    content: '<h4>Laura M Beaty</h4> <h4>Phone#404-419-4700</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.774155,
      lng: -84.357265
    },
    content: '<h4>Nicholas J Beaulieu</h4> <h4>Phone#404-815-1957</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.6601,
      lng: -84.514436
    },
    content: '<h4>Kelly R Beavers</h4> <h4>Phone#404-629-9495</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.725753,
      lng: -84.510175
    },
    content: '<h4>Kelly R Beavers</h4> <h4>Phone#404-691-7006</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.793186,
      lng: -84.395515
    },
    content: '<h4>Kelly R Beavers</h4> <h4>Phone#404-367-3000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.751765,
      lng: -84.381967
    },
    content: '<h4>Rabih I Bechara</h4> <h4>Phone#404-616-2590</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.923813,
      lng: -84.3098
    },
    content: '<h4>Teresa L Beck</h4> <h4>Phone#404-778-6922</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.908149,
      lng: -84.356157
    },
    content: '<h4>Nadine A Becker</h4> <h4>Phone#404-257-0170</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.738682,
      lng: -84.424611
    },
    content: '<h4>Carla Y. Bedford-Dixon</h4> <h4>Phone#404-346-3487</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.857363,
      lng: -84.430103
    },
    content: '<h4>Carla Y. Bedford-Dixon</h4> <h4>Phone#770-938-1757</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h4>Sally G Beer</h4> <h4>Phone#404-355-9815</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.91928,
      lng: -84.350665
    },
    content: '<h4>Sally G Beer</h4> <h4>Phone#404-851-5400</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.808133,
      lng: -84.395478
    },
    content: '<h4>Sally G Beer</h4> <h4>Phone#404-605-5161</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.61376,
      lng: -84.44545
    },
    content: '<h4>Sally G Beer</h4> <h4>Phone#770-997-9924</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.906256,
      lng: -84.4775
    },
    content: '<h4>Sally G Beer</h4> <h4>Phone#404-355-9815</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.887645,
      lng: -84.382273
    },
    content: '<h4>Sally G Beer</h4> <h4>Phone#404-355-9815</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.808133,
      lng: -84.395478
    },
    content: '<h4>Sally G Beer</h4> <h4>Phone#404-605-5699</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.772558,
      lng: -84.39338
    },
    content: '<h4>Sally G Beer</h4> <h4>Phone#404-355-6562</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.906256,
      lng: -84.4775
    },
    content: '<h4>Sally G Beer</h4> <h4>Phone#404-603-7210</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.725753,
      lng: -84.510175
    },
    content: '<h4>Sally G Beer</h4> <h4>Phone#404-691-7006</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.808133,
      lng: -84.395478
    },
    content: '<h4>Sally G Beer</h4> <h4>Phone#404-605-5161</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.860917,
      lng: -84.310338
    },
    content: '<h4>Yohannes A Belachew</h4> <h4>Phone#404-477-1218</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.679651,
      lng: -84.4409
    },
    content: '<h4>Denise M Bell-Carter</h4> <h4>Phone#404-616-2886</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.680608,
      lng: -84.43888
    },
    content: '<h4>Denise M Bell-Carter</h4> <h4>Phone#404-752-1000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.809054,
      lng: -84.396336
    },
    content: '<h4>Indumathi  Bendi</h4> <h4>Phone#404-350-3860</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.905202,
      lng: -84.354452
    },
    content: '<h4>Carolyn M Bennett</h4> <h4>Phone#404-785-3240</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.794087,
      lng: -84.319983
    },
    content: '<h4>Carolyn M Bennett</h4> <h4>Phone#404-785-6000</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.90622,
      lng: -84.353194
    },
    content: '<h4>Carolyn M Bennett</h4> <h4>Phone#404-256-5252</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h4>Adrian Poole Bennett</h4> <h4>Phone#404-352-1235</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.808743,
      lng: -84.397157
    },
    content: '<h4>Adrian Poole Bennett</h4> <h4>Phone#404-352-1235</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.681232,
      lng: -84.424939
    },
    content: '<h4>Eric A Benning</h4> <h4>Phone#404-564-6784</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.727063,
      lng: -84.391902
    },
    content: '<h4>Eric A Benning</h4> <h4>Phone#404-688-1350</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.712706,
      lng: -84.309943
    },
    content: '<h4>Eric A Benning</h4> <h4>Phone#404-241-2336</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.827743,
      lng: -84.347571
    },
    content: '<h4>Sharon A Bent-Harley</h4> <h4>Phone#678-904-5999</h4>'
  });
  addMarkers({
    coords: {
      lat: 33.612301,
      lng: -84.473251
    },
    content: '<h4>Helena K Bentley</h4> <h4>Phone#404-765-9437</h4>'
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