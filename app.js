var kayBlogArray = [{
       
        header: 'First Day in Florida',
        picture: "20200708_000819070_iOS.jpg",
        text: "Went to Florida for the first time, travelled by plane with raja, stayed with auntie."
    },
    {
        header: 'Beach Fun ',
        picture: '20200709_235656000_iOS.png',
        text: 'Water was calm the first time to the beach, after that there was a lot waves and my wig got knocked off by one while on buggie board.'
    },
    {
        header: 'Orlando Windseeker',
        picture: '20200712_013140586_iOS.jpg',
        text: 'Travelled to Orlando, went shopping and got on a mini windseeker ride.'
    },
    {
        header: ' Backyard Waterpark',
        picture: '20200714_220415678_iOS.jpg',
        text: 'It was a inside day but then got a surprise inflaitable waterslide in the back yard.'
    },
    {
        header: 'Caught a Fish',
        picture: '20200717_003328538_iOS.jpg',
        text: 'Went fishing with Uncle and caught a catfish after a few hours of pictures and sitting.'
    },
    {
        header: 'Playing in Sand',
        picture: '20200718_033425606_iOS.jpg',
        text: 'While at beach one day I decided play in sand and burried myself.'
    },
    {
        header: 'On the Water',
        picture: 'IMG_5264.JPG',
        text: 'A kayaking trip on the ocean, beautiful sunset, fun waves.'
    },
    {
        header: 'Modeling Pictures',
        picture: 'IMG_5369.JPG',
        text: 'As a aspiring madel i needed some good pictures in the sunset, props to my lil sister.'
    },
    {
        header: 'Water Boat Ride',
        picture: 'IMG_5421.jpg',
        text: 'On last day we went on a air boat ride, we saw a few alligators, it was fun till it started raining and we were hit with raindrops like bullets.'
    },
]

var kayPost ='';
for (var i = 0; i < kayBlogArray.length; i++){
    var header = "<div class='head'><h2>" + kayBlogArray[i].header +"</h2>";
    var body = "<p class='text'>"+ kayBlogArray[i].text + "</p></div>";
    var image ='<img src="./'+kayBlogArray[i].picture + '">';
    var Combine = header + image + body;
    kayPost = kayPost + Combine;

    console.log(kayPost);
    document.getElementById('kayPost').innerHTML = kayPost;
}
