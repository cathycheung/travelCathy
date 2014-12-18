$(document).ready(function(){

    var markers = {
      "0": {latLng: [41.90, 12.45], name: 'Vatican City', image: 'blah', content: "Vatican City is cool!!!!!"},
      "1": {latLng: [22.26, 114.18], name: 'Hong Kong', image: 'hongkong.png', content: "I love Hong Kong"},
      "2": {latLng: [-27.46, 153.02], name: 'Brisbane', image: 'brisbane.jpg', content: 'aussssie!!'},
      "3": {latLng: [-28.01, 153.4], name: 'Gold Coast', image: 'goldcoast.png'},
      "4": {latLng: [-33.86, 151.20], name: 'Sydney', image: 'sydney.png'},
      "5": {latLng: [43.06, 141.35], name: 'Sapporo'},
      "6": {latLng: [41.76, 140.73], name: 'Hakodate'},
      "7": {latLng: [43.18, 141.00], name: 'Otaru'},
      "8": {latLng: [40.81, 140.75], name: 'Aomori'},
      "9": {latLng: [38.26, 140.86], name: 'Sendai'},
      "10": {latLng: [35.66, 139.69], name: 'Tokyo'},
      "11": {latLng: [31.20, 121.50], name: 'Shanghai'},
      "12": {latLng: [22.16, 113.55], name: 'Macau'},
      "13": {latLng: [23.03, 113.71], name: 'Dongguan'},
      "14": {latLng: [23.13, 113.26], name: 'Guangzhou'},
      "15": {latLng: [22.36, 112.68], name: 'Kaiping'},
      "16": {latLng: [22.56, 113.06], name: 'Jiangmen'},
      "17": {latLng: [22.55, 114.10], name: 'Shenzhen'},
      "18": {latLng: [30.10, 121.01], name: 'Pinghu'},
      "19": {latLng: [30.25, 120.16], name: 'Hangzhou'},
      "20": {latLng: [32.05, 118.76], name: 'Nanjing'},
      "21": {latLng: [30.00, 120.58], name: 'Shaoxing'},
      "22": {latLng: [31.30, 120.60], name: 'Suzhou'},
      "23": {latLng: [23.91, 120.68], name: 'Nantou'},
      "24": {latLng: [25.03, 121.63], name: 'Taipei', image: 'taipei.png'},
      "25": {latLng: [11.55, 104.91], name: 'Phnom Penh'},
      "26": {latLng: [13.35, 103.84], name: 'Siem Reap'},
      "27": {latLng: [3.13, 101.68], name: 'Kuala Lumpur'},
      "28": {latLng: [2.2, 102.25], name: 'Malacca City'},
      "29": {latLng: [1.3, 103.8], name: 'Singapore'},
      "30": {latLng: [51.75, -1.25], name: 'Oxford'},
      "31": {latLng: [51.5, -0.12], name: 'London'},
      "32": {latLng: [52.36, 4.9], name: 'Amsterdam'},
      "33": {latLng: [41.9, 12.5], name: 'Rome'},
      "34": {latLng: [43.78, 11.25], name: 'Florence'},
      "35": {latLng: [45.43, 12.33], name: 'Venice'},
      "36": {latLng: [45.46, 9.18], name: 'Milan'},
      "37": {latLng: [46.81, 8.4], name: 'Engelberg'},
      "38": {latLng: [47.05, 8.3], name: 'Lucerne'},
      "39": {latLng: [49.41, 8.71], name: 'Heidelberg'},
      "40": {latLng: [50.11, 8.68], name: 'Frankfurt'},
      "41": {latLng: [21.47, -71.13], name: 'Grand Turk Island'},
      "42": {latLng: [18.06, -63.05], name: 'St. Maarten'},
      "43": {latLng: [18.33, -64.91], name: 'St. Thomas'},
      "44": {latLng: [21.38, -77.90], name: 'Camaguey'},
      "45": {latLng: [36.12, -115.17], name: 'Las Vegas'},
      "46": {latLng: [40.71, -74.00], name: 'New York City'},
      "47": {latLng: [41.88, -87.62], name: 'Chicago'},
      "48": {latLng: [49.25, -123.10], name: 'Vancouver'},
      "49": {latLng: [49.88, -119.44], name: 'Kelowna'},
      "50": {latLng: [43.7, -79.40], name: 'Toronto'},
      "51": {latLng: [45.25, -81.66], name: 'Tobermory'},
      "52": {latLng: [43.26, -79.95], name: 'Dundas'},
      "53": {latLng: [43.46, -80.51], name: 'Waterloo'},
      "54": {latLng: [43.11, -79.06], name: 'Niagara Falls'},
      "55": {latLng: [41.96, -82.51], name: 'Point Pelee, Windsor'},
      "56": {latLng: [45.42, -75.69], name: 'Ottawa'},
      "57": {latLng: [45.50, -73.56], name: 'Montreal'},
      "58": {latLng: [46.81, -71.21], name: 'Quebec City'},
      "59": {latLng: [46.11, -74.60], name: 'Mont Tremblant'},
      "60": {latLng: [44.64, -63.57], name: 'Halifax'},
      "61": {latLng: [44.49, -63.91], name: "Peggy's Cove"}
      };

    // var post = [
    //    {
    //     "location" : "1",
    //     "title" : "Vatican City",
    //     "content" : "Vatican City is cool!!!!!"
    //    },
    //    {
    //     "location" : "2",
    //     "title" : "Hello World",
    //     "content" : "This is my story of the first time I wrote hello world!"
    //    }
    // ];
        
    // $('#map').on('click','.marker', function(e){
    //   $this = $(this);
    //   var id = $this.data("location");
    //   var showPosts = [];
    //   $('#blogContent').forEach(function(post,idx){
    //     if (id == post.location){
    //       showPosts.push(post);
    //     };
    //   });

    //   updatePosts(showPosts);

    // });

    // Function which updated the blog post section with the relevant posts
    function updatePosts(post){
      post.forEach(function(post,idx){
        $('#post').append('<h1>'+ post.title +'</h1>');
        $('#post').append('<p>'+ post.content +'</p>');
      });
    };
        
        
        $(function(){
          $('#world-map-markers').vectorMap({
            map: 'world_mill_en',
            scaleColors: ['#C8EEFF', '#0071A4'],
            normalizeFunction: 'polynomial',
            hoverOpacity: 0.7,
            hoverColor: false,
            zoomOnScroll: false,
            markerStyle: {
              initial: {
                fill: '#F8E23B',
                stroke: '#383f47'
              }
            },
            backgroundColor: '#154552',
            markers: markers,
            onMarkerLabelShow: function(events, label, index) {
              label.html('<img src="img/MapIcons/' +markers[index].image +'"><br/>'+label.html());
            },
            onMarkerClick: function(events,index) {
              console.log(index);
              
              // start anew by hiding all visible galleries and removing active class
              $('.active').hide().removeClass('active');
              // $('.blogLocation').text(post[index].title);
              
              $('.location-text').text(markers[index].content);
              $('.blogContent').text(markers[index].name);
              $('.div' + index).show();
              $('.div' + index).addClass('active');
              // $('.div1').show(markers[1]);
              // var html = "<div><p>" + this.div0 + "</p></div>"


            }
          });
        });
});