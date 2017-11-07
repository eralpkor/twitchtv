
let streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
let streams = 'https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/streams/';
let channels = 'https://cors-anywhere.herokuapp.com/https://wind-bow.gomix.me/twitch-api/channels/'
let noImage = 'https://static-cdn.jtvnw.net/jtv_user_pictures/twitchin-profile_image-00b85365ca8c8405-300x300.jpeg'

for (var i = 0; i < streamers.length; i++) {
    //console.log(streamers[i]);
    var getStream = new XMLHttpRequest();
    getStream.open('Get', streams + streamers[i], false);
    getStream.send(null);
    var gamers = JSON.parse(getStream.response);
    var streamerStatus = gamers.stream;
    //console.log(gamers);
 
    var getLogos = new XMLHttpRequest();
    getLogos.open('Get', channels + streamers[i], false);
    getLogos.send(null);
    var y = JSON.parse(getLogos.response);
    var logo = y.logo;
    var user = y.display_name;
    var url = y.url;
    var game = y.game;
    var followers = y.followers;
    if (logo === null){
        logo = noImage;
    }
    //console.log(game);
    
    if (streamerStatus === null){
        $('.preview').append("<a href='" + url + "'target='_blank'><div class='offline'><img src='" + logo + "' alt='User Logo' class='user-logo'><div class='twitch-info'>" + user + "<p>Followers: " + followers + "</div><p><span>offline</span></p>" + "</div>");
        // console.log('not online')
    } else {
        $('.preview').append("<a href='" + url + "'target='_blankk'><div class='online'><img src='" + logo + "' alt='User Logo' class='user-logo'><div class='twitch-info'>" + user + "<p>Followers: " + followers + "</p></div><div class='game'><p>Playing:<br><span>" + game +"</span></p></div></div>");
        //console.log('online')
    }
}
// Button functionality
$('#showAll').click(function() {
    $('.online').hide();
    $('.offlie').hide();
    $('.online').show();
    $('.offline').show();
});
$('#showOn').click(function(){
    $('.online').hide();
    $('.offline').hide();
    $('.online').show();
});
$('#showOff').click(function(){
    $('.online').hide();
    $('.offline').hide();
    $('.offline').show();
});


