/*welcome*/
$("#modal-welcome").iziModal({
	title: "Video Tutorial FNF",
	icon: 'icon-star',
	headerColor: '#922462',
 backgroundColor: '#922462',
	width: 600,
	timeout: 105000,
	timeoutProgressbar: true,
	transitionIn: 'fadeInUp',
	transitionOut: 'fadeOutDown',
	/*attached: 'bottom',*/
	history: false,
	autoOpen: true/*,
	onClosed: function(){
		$("html").removeClass('overflow-hidden');
	}*/
});
/*/welcome*/
/*/window.onload = function () {
    var element = document.getElementById('video');
    element.muted = "muted";
}*/

$('[data-reveal]').on('open.zf.reveal', function() {
        $('#' + $(this).attr('id')).find('video').get(0).play();
    });
    $('[data-reveal]').on('closed.zf.reveal', function() {
        $('#' + $(this).attr('id')).find('video').get(0).pause();
        YaGames.init({
            adv: {
                 onAdvClose: wasShown => {
                                console.info('adv closed!');
                            }
                        }
                    })
                        .then(ysdk => {
                            ysdk.adv.showFullscreenAdv();
                            window.ysdk = ysdk;
                        });
            
                    function ShowAd() {
                        window.ysdk.adv.showFullscreenAdv();
        }
    });