// ==UserScript==
// @name        Legacy Tools
// @description Improvements to Legacy Game
// @include     https://www.legacy-game.net/*
// @include     https://dev.legacy-game.net/*
// @grant       none
// @require     http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.js
// @require     http://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/jquery-ui.js
// @require     http://cdnjs.cloudflare.com/ajax/libs/mousetrap/1.4.6/mousetrap.js
// @require     http://cdnjs.cloudflare.com/ajax/libs/sprintf/0.0.7/sprintf.js
// @require     http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore.js
// @require     http://cdnjs.cloudflare.com/ajax/libs/URI.js/1.11.2/URI.min.js
// ==/UserScript==


var loaderAnim = "data:image/gif;base64,R0lGODlhGAAYAPUAABgYF93d0auroSQkItLSxj4+O0pKRzExL7m5r2JiXsTEuHt7dZOTioiIgJSUi6CgmFVVUHp6cyUlI29vadDQxG1taGFhXLi4rqyso0lJRVZWUoeHgJ6elp+fl5OTi3t7dD09OqysomJiXcXFube3rW5uaJOTjNHRxTExLoaGf0pKRsXFulZWUVVVUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQAAwD/ACwAAAAAGAAYAAAG/0CAcEgESFCDolIJYlwoFAJF8bAsixIHhbQwJA8VzhZyBRgUJIihAbBMBROUNrU0UBwHAeUhNCQcKwoJbmxEEgoOBisYBUIWCBgpKCkUKRoUFUQOJAcrDklCEhENCBQTbhELKxJCIBQQAhggK5kAsA0gExQRuiAIhQwkdgUkfK0MGLsiFAYYHBMKQhcLHALLrEIFDBAVFBbVIqsUjcwIEQ8cBRl9IZjBdgPlERIE8RAIHw8O2RUpCCAEAFBQoWACBgYoAgi8F0GABzMVOlRYMUDhK3MhPlE4IAhDgwayKlVABO0ABRQrNJCgo6CCAAf+XFWogMATCgUN/BU4ucIKuo8JK1CYikCBAYgB0DCgjBAMAoUkbm6m0CXCAgkCAXCiIMGIQoIHxgCQcJDAG1EOBoQcUKW0mJ20QpxaoFTCgB4oFMwR44RgHxFKGohiEDFABQQU2vYcwEACFJEGFBaA4LBiSs0tCQwg4HRlIoIJEgxMiKABBYQHdxwvkdBAQV4MIUhUfgC3DJECTGFaUE0kCAAh+QQBAwAAACwHAAAABgAOAAAGHECAcEgkEI+cBlEgOg5BG6RzOiw9pEdIiggZBgEAIfkEAQMAAAAsBwAAAAYADgAABRcgII4kEJTkU07oKBTp0I7wOCEzWTFzCAAh+QQBAwAAACwHAAMABQAKAAAGGUCAEMEQAiIHo5EkUEqUykdSuIJKUMZGMwgAIfkEAQMAAAAsCAADAAQACgAABhpAgFAhBGQAGomQAikKJUoAIuUsaipCBgYQBAAh+QQBAwAAACwIAAMABAAJAAAGFUCAcAgwAESaYYQIACWFDqawsgAEAQAh+QQBAwAAACwIAAMABQAJAAAGFUCAcCUUQoqRIqChLBZSSk5TGWEIgwAh+QQBAwAAACwIAAMABQAJAAAGGECAkCIsQoScSpFTKDpJmeLDOQAVFxhhEAAh+QQBAwAAACwJAAAABAAMAAAGF0CAUCIEEIrIJODBKVqSCIcSNRGmLsIgACH5BAEDAAAALAkAAAAFAAwAAAYVQIBwIBSuisikkoScFCFIhLLIiRaDACH5BAEDAAMALAoAAAAEAAwAAAYXwIEQIHwohMikEhkRlizCFVRJSiAzwiAAIfkEAQMAAgAsCgAAAAUADAAABhhAgXAojBAlxOQQQfwMJyniYjggIqJKQRAAIfkEAQMAAgAsCgAAAAUACwAABRWgII4iwIyARo7G6ooOeYpSKyrPGAIAIfkEAQMAAgAsCgABAAYACgAABhVAgVAAYAyJjqNyyRxylMkhyqIkHYMAIfkEAQMAAgAsCwABAAYACgAABROgIAqAMQqFiJwo67KP650Re7EhACH5BAEDAAIALAsAAQAHAAoAAAYbQIFQCBgSWRhBhySUCA8Wo3RKHXKmnykiaQwCACH5BAEDAAEALAsAAgAIAAkAAAUSYCCKgFSIE2mN2ei+cCy7ywyHACH5BAEDAAEALAsAAgAJAAkAAAYXwIBwCAAQG0KA5pNEClvDqHRKrVqvwyAAIfkEAQMAAgAsCwADAAoACAAABhtAgVBSEQIAQqFqZKwsklABSziJWq9YYSrLDQIAIfkEAQMAAQAsDAADAAoABAAABhXAQAAAEBqNgAayiDkKARNRwin8BIIAIfkEAQMAAQAsDAADAAsABQAABhvAgHBIJAIYxYDjEZAshgBAAJIMACCDqpAUCAIAIfkEAQMAAQAsDAAEAAsABQAABhjAgDAAkAyHE+FgdRQmm0QAdAiQTgMGUhAAIfkEAQMAAQAsDAAEAAwABwAABh3AgFAIGBpRiwAANDEKC0ODc0qtKotWAERiDZACQQAh+QQBAwABACwMAAUADAAHAAAGHcAAoBAQAopIIacIWEyS0EAJyohar4Dj1bgNRBJBACH5BAEDAAEALAwABQAMAAkAAAUZYBAAgGiewaGI5PmgAHc2aG3feN7i+81oIQAh+QQBAwABACwMAAYADAAKAAAGIMBAAFASGo0eYcUIABg/R6FmEa1ar9isNtrMdq8GEiAIACH5BAEDAAEALAwABgAMAAwAAAYjwIAQIBEahZtFALA6GishJwDglE6q2Kx2y+1qp1sJdYsKBAEAIfkEAQMAAQAsDAAGAAsADQAABiHAgDAAGBoTQo5x+Fg6ncUnkVOQWq/YrFYYfR5AXWcjEAQAIfkEAQMAAQAsDAAHAAoADgAABiTAwOEQAIACSOQCSUw6n1AnABANaFDVrHbLrU6jki+UU6BGsUEAIfkEAQMAAQAsDAAHAAoADwAABiXAAAAQEBaPh5Uwkjk6n9AodCilRkkFqXbL7UIlVmcmE3YuiIEgACH5BAEDAAEALAwACAAKAA8AAAYowADAERACioFGIFHUMJACpHRKrVqlgCMVVdFSMdeweIz1SiHZasMcBAAh+QQBAwABACwMAAgACQAQAAAGJcBAwDARGoUWIQBwNA4ezah0Sg0spdeoAlXteqNZIyYRNoKYxyAAIfkEAQMAAQAsCwAIAAoAEAAABirAgBAgERoDiwBgdRQ+jgBA8/gATa/YrBYblU4dh+xgS8YKDtHpRpJuBgEAIfkEAQMAAQAsCQAIAAsAEAAABirAgHAIGBojhUBKYxQ6mtAmoBgNOFDVrHbLFQ6m1RS4Su1WH9OyMa0eBgEAIfkEAQMAAQAsBgAJAA4ADwAABivAgHA4QQUGkqFSmFoFFsuodKoEAKhCyeaK7Xq/4KXVq+FiDcrUGDtYh6VBACH5BAEDAAEALAQACQAPAA4AAAYtwIBwOAQEAEaickEKoBbKqPAgrVqlyOvQAtEOJ96weHzMBlKRpPJhLquv7WoQACH5BAEDAAEALAIACQARAA0AAAYpwIBwSCwaj44AAHBsAkjNqHRKVTKrgcq1KsAWH1vqMjxdGgXmaiItDAIAIfkEAQMAAQAsAQAKABEADAAABirAgHBIFJYSxSRxIQQpnwEKdEqtPgEASARQTXGxVcGXay1XVwNytQAmBgEAIfkEAQMAAQAsAAAKABEADAAABi7AgHBIHIIgxSQxIgQon4BJQDF4KgdOaxGQ1Q653gA4LHx0w1Lr4ax1gMZkdiAIACH5BAEDAAEALAAACgARAAsAAAYswIBwSBwCBkJAClAsWkhJZnMKqEqnQ9EmcMV6v+DwF9QlJpqc8rBSFXPbzSAAIfkEAQMAAQAsAAAIABEADAAABSdgkDxBaZ4oAKDsqbauucJl4dB47s56gGi9YE/CerEKRlOFl2IGeCEAIfkEAQMAAQAsAQAFABAADwAABSlgII5kKUqNqQKsarZuLM+0OiR1gOf8qAEkSexBWgBrrCNNKULAZgdmCAAh+QQBAwABACwCAAMADgARAAAGL8BAICMsGosATeN4BDiZTQB0Sq1ar1jq02ohZYULCHUg3UIxEqH0WyxgU2trPBAEACH5BAEDAAEALAMAAAANABMAAAYtwIBwSCwajwAJEVAEOFFHoTNKrVqv2KyWulAeIanAtDreDisgZlXzVUcPZWEQACH5BAEDAAEALAMAAQAMABIAAAYuwIAwAACkhkhiEZREAprQqHRKrSIdVIthWuQ+oaAClWGNFr/DATKFDhi60rYwCAAh+QQBAwAEACwDAAAADAASAAAGL0CCcCgESIhEAEB0KiCLgKd0Sq1ahY8qoASiKrXRq/j5pZISY8LK6S0TGOFhnBgEACH5BAEDAAQALAQAAAAMABEAAAYvQIJwKEQNiEghRdFIDg+VknNKrQoBEQYVAKhyreCweCzkHAmViLNL4LIJB6vnHQQAIfkEAQMABAAsBQAAAA4AEQAABjNAgnBILBqHD8uxyKGQQESHUbKBAjjLIQBQyQq33rB4TC4vS2IUwJhYa93ElHcBz0bqwyAAIfkEAQMAAgAsBQACABAADwAABjFAgXBIHEKKAEZR6KCkhgBAYym0UCrCKHUIkmy/4LB4TB5GjmNtemkZlA1hEoCs3gYBACH5BAEDAAIALAUAAwASAA0AAAYvQIFQAACEhsjksAhSChvOqEBDqUidC8XVCdlGMysvsiheAspob+bsNQhD7OtaHAQAIfkEAQMABAAsBQADABMADQAABjJAgnBooSgqw6RyCDCIQMuodEpNriTVJaIhhDCyhImCACiDBw+wes2OYrMoC0AoUs/VQQAh+QQBAwAEACwGAAMAEgAMAAAGMkCCcCgUTFDEZDLhGC2U0GhSIoUCUIxqEgDQeqWUwneIiIyFoewZIoZkhJGulivkyKVBACH5BAEDAAIALAcAAwARAAwAAAYzQIFwSCwaiStF4iiwFAcpiqEIAHCOB2MVwOx6v+CwsOMIYwQGUDjkqAqXXVJqmIB4Q5AgACH5BAEDAAIALAcABQARAA0AAAY1QIEAULgIj4IU8giQRJYWynNJPVYa1ax2i6xwlyjDlwkYL1cSswBV1q4sZghlYOY81BCQIAgAIfkEAQMABAAsBwAFABAADwAABjdAghBgQVSEyCQSIIkUlNCocEIBSaEYDvJyJUA+Q1E3CQCMz1eDw4xmo9/ox9tAMaARjvdiQAgCACH5BAEDAAIALAgABQAOABEAAAY1QIFQiPkMj8jGA8lsDlFOJCoVtawkAElUQFFthYyCMPQVoEDltHrNdmq/EgzpGyIdvoWBMAgAIfkEAQMAAgAsCAAFAA4AEgAABjZAgXCYQg2PSATFgmwKShkkwKJwHgEAiXXL5Somgslii4gIsFtPtMtuu9/wrgHRdVAc3YXhGAQAIfkEAQMAAgAsCQAGAA0AEgAABjVAgXAomBCFGeKEEiECVA6ixXisWq/DJlYoAW2/gpVmW6CgtpAoeM1uuwWQB7awosixkEE1CAAh+QQBAwAEACwJAAUADAATAAAGMkCCcEgsGokASOMoBIAmQxHFwBQyItUiiJMFALLgMJhBqh4oCfNCzG5XK6EyU+NIWYxBACH5BAEDAAQALAkABwALABEAAAYwQIJQsBAaj4zGcbnkCAgABNNAGQAgTIIly+16v91CV0J6cBukA3jN7SAwXFCEwQ0CACH5BAEDAAUALAcABwANABEAAAYtwIJw2AANj0cMCclsDhfOI6BJUUWFmMx1y+16vaDllfI4XLVCxmRwTSkoX2cQACH5BAEDAAIALAUACAAPAA8AAAY2QIFwOKREiEjAQlhJIYmAx3MqKFCvRAoEK0RRUFzBYBIum89DK7fAIHKWTxIpMaysEGVJIxwEACH5BAEDAAIALAMACAAQAA4AAAYuQIFwSCwah6whRXMcioaVTHNKrVIP1mEKkRVwJt0wEZvVLLsNipGzUls1GhQxCAAh+QQBAwAEACwCAAkAEQANAAAGM0CCcDgsNAZCC3EpNHQkBAaJSRWiJtWsdsvtElGriJcRIiwaXgKEovSm0lWPAuEFTcTLIAAh+QQBAwAAACwBAAkAEQANAAAGMUCAcEgEMAzFJDGUUjqHIMJTGZlar0JIFQuwUCRWFAkDIDmsDwyKOwVZ2IkVhS1RKYMAIfkEAQMAAAAsAQAJABAADAAABitAgHBIFEKKSOJKkkwOmlBAIMKMClOKinX44Gy/YOJilawSBZEkAgMGeZNBACH5BAEDAAAALAAABwARAA0AAAYxQIBwSCwaj8ikMklJDFVLCxQgISyFA8CAcrhWFNdnJUwOd4tnI4tSIk4oCGSEUkQNgwAh+QQBAwAAACwAAAoAEQAKAAAGKEAACEAsGokVouR0bE4iRFSgSa1aJ1aqI5Xtepscy5fINaIUY2LGGAQAIfkEAQMAAAAsAAAIABEADAAABjdAQGQCKBqPyMsCyTxSDM0oYRAtphBVpqSS7XolioaxgKE2OZgjSpHyGhOUI8hdPFDu9IEKcgwCACH5BAEDAAAALAEABwAPAAwAAAYpQNBqACgaj0UGCclsOp/QqLRoWBYzqKnAMZ2snBrFNJFyWjgGaUHADAIAIfkEAQMAAAAsAgAGAA0ADQAABiLAxgRALBoBFMhxyWw6n9Do0rICkCxOkBRaiT4aS0TUsAwCACH5BAEDAAAALAIABQANAA0AAAYqQMnFACgajw7ScclsOp/Q6PEjiVIgzkpRkXBaUtLoYMIUiIwYBTNCYQYBACH5BAEDAAAALAMAAwAMAA4AAAYwQEBGAygajQZK6shUOJjQqHRKBVQMVESESoFUv1PSs0hkQlDG1cQogU4oxcwpUAwCACH5BAEDAAAALAMAAwAMAA4AAAYnQIABgwIYj0gHcslsOp/MgQTq4ECv2CwUcWwJmJEjinLMgKAMwjEIACH5BAEDAAAALAMAAgALAA8AAAYqQABAEhEajwrScclsOp9CzdNAQTk5Aqh2q3WklhmFMIVYVhzMBOMJUQqDACH5BAEDAAAALAQAAQAKABAAAAYqQIBwKCQMHSSiEqJsOp+ozFPweAIK1mx2YCVVnpiGUtOUCAXKA8VqIQYBACH5BAEDAAAALAQAAQAJAA8AAAYoQIAQlBAahZTHcclsAlDNw6rUxDivV2iTNGkiIlijpGhkFCurI9gYBAAh+QQBAwAAACwFAAEACAAPAAAGJ0CAkLEQGgGkxHHJPBouKKajSW1KBkwOg4n4VJuDidBQEaIoZUE1CAAh+QQBAwAAACwFAAEABwAOAAAGJUCAEECqDIUL1HF5iCxXj6V0OrWQlg8OVSpRHlMYAMoJAAkziCAAIfkEAQMAAAAsBQAAAAcADwAABiRAgHBIBFwURUAmSRQwihgQczp8QIgiioTKBTAWxYbwkypWAEEAIfkEAQMAAAAsBgAAAAYADwAABh9AgHBIpAiIhmFGUkwQC8QoKEIkdaJYbMRCFHiypGwQADs=";
// =============================================================================
//                              Script Set-Up
// =============================================================================
// Avoid conflicting with page's jQuery
this.$ = this.jQuery = jQuery.noConflict(true);

// =============================================================================
//                            Primary Entry Point
// =============================================================================
/**
 * Registers a function to be executed on pages where the path matches path
 * rules, where path_rules is an array of regexes. For example,
 * registerFunction(foo, ['bar.php', 'baz.php']) will register foo to be run
 * on bar.php and baz.php.
 */
var function_registry = {};

function registerFunction(fn, path_rules, subdomain = 'all' ) {
	assert(
		path_rules !== undefined && path_rules.length > 0,
		'registerFunction path_rules cannot be empty'
	);

	var current_domain	= window.location.hostname,
	  current_subdomain	= current_domain.split( '.', 1 )[0];

	$.each(path_rules, function(i, rule) {
		if( subdomain === 'all' || subdomain === current_subdomain )
		{
			if (rule in function_registry) {
				function_registry[rule].push(fn);
			} else {
				function_registry[rule] = [fn];
			}
		}
	});
}

registerFunction( function(){console.log("RegLeg Test");}, ['.*'], 'www' );
registerFunction( function(){console.log("DevLeg Test");}, ['.*'], 'dev' );
registerFunction( function(){console.log("AllLeg Test");}, ['.*']);


/**
 * Executes registered functions based on current path.
 */
function executeFunctions() {
  $.each(function_registry, function(rule, fns) {
    if (host.path.match(rule)) {
      $.each(fns, function() {
        // Log error messages if an individual function fails, but don't stop
        // execution on exception.
        try {
          this();
        } catch (e) {
          console.error(e.message);
          console.error(e.stack);
        }
      });
    }
  });
}
$(document).ready(executeFunctions);


// =============================================================================
//                            Global Variables
// =============================================================================

var host = {
	'whole'			: $(window)[0].origin,
	'path'			: window.location.pathname
};

var head	= document.head || document.getElementsByTagName('head')[0],
	body	= document.head || document.getElementsByTagName('body')[0],
	$head	= $('head'),
	$body	= $('body');


// =============================================================================
//                              Player Class Helper
// =============================================================================
var Player = {
  getHP: function() {
    var hp	= 0,
        box	= $('#char_box1 > font');
    if (box.length) {
      hp = parseInt(box.text()); // from template.php
    }
    return hp;
  },

  getEnergy: function() {
    var energy	= 0,
		turns	= $("#turnbox-text");
    if (turns.length) {
      energy = parseInt(turns.text().replace(/\,/g, ''));
    }
    return energy;
  },

  inWL: function() {
    // Check character bg to see if we're in the WL or not.
    var char_bg = $('div.char-bg');
    var in_wl = false;
    if (char_bg.length > 0) {
      in_wl = char_bg.css('background-image').indexOf('char_bg_waste') > -1;
    }
    return in_wl;
  }
};


// =============================================================================
//                            Custom Styling
// =============================================================================

var tamperCSS = [
	':root{--accent-color:' + $('.colortext').css('color') + '}',
	'::-webkit-scrollbar {width:20px}',
	'::-webkit-scrollbar-track, *:not(body)::-webkit-resizer{box-shadow: inset 0 0 5px grey;border-radius: 10px;}',
	'::-webkit-scrollbar-thumb {background: rgb(0,0,0);background: -moz-linear-gradient(90deg, rgba(0,0,0,1) 0%, var(--accent-color) 50%, rgba(0,0,0,1) 100%);background: -webkit-linear-gradient(90deg, rgba(0,0,0,1) 0%, var(--accent-color) 50%, rgba(0,0,0,1) 100%);background: linear-gradient(90deg, rgba(0,0,0,1) 0%, var(--accent-color) 50%, rgba(0,0,0,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1);border-radius: 10px;}',
	'#gangchat::-webkit-scrollbar{width:8px}',
	'*:not(body)::-webkit-scrollbar{width:12px}',
	'*:not(body)::-webkit-scrollbar-track, *:not(body)::-webkit-scrollbar-thumb {border-radius:0}'
];

registerFunction( function() {
	$.tamperCSS(tamperCSS);
}, ['.*']);
	
$head.append('<link href="https://fonts.googleapis.com/css?family=Aldrich" rel="stylesheet">');

// =============================================================================
//                            Site Functions
// =============================================================================

// FEATURE: Button Hunter

var button_registry = [];

button_registry.push( [ 'input[type="button"][value="Attack"]', ['map2.php'] ] );
button_registry.push( [ 'table.maintable a[href="map2.php"]:contains("Back to Wasteland")', ['hunting3.php', 'fight2.php'] ] );
button_registry.push( [ 'table.maintable a[href="fight.php"]:contains("Back to Attack Setup")', ['fight2.php'] ] );
button_registry.push( [ '#begin', ['hunting3.php', 'fight.php'] ] );
button_registry.push( [ 'input[value="Attack Target"]', ['hunting.php'] ] );
button_registry.push( [ '#containerdiv a[href="map2.php"]', ['hunting3.php'] ]);
button_registry.push( [ '#job1', ['jobcenter2.php'] ]);
button_registry.push( [ 'input.button[value*="Continue job"]', ['jobcenter4.php'] ]);
button_registry.push( [ 'input[type="submit"][value="Forge"], #craft_again', ['shadow_forge.php'] ]);

$.each(button_registry, function(i, rules)
{
	registerFunction( function()
	{
		var anchor = $( rules[0] );

		if( anchor.length )
		{
			anchor.on( 'click', function()
			{
				$(this).blur();
			}).focus();
		}
	}, rules[1] );
});


// FEATURE: Adds tooltip hovercards to player items.
registerFunction(function addItemHovercards() {
  $('a[href*="javascript:modelesswin"]').each(function() {
    var equipData;
    $(this)
      .mouseover(function() {
        var context = $(this)
        if (!equipData) {
            equipData = "<img src=\""+loaderAnim+"\" />";
            ddrivetip(equipData, 30);
          $.ajax({
            url: $(this).attr('href').match(/'(.*)'/).pop(),
            async: true,
            success: function(data) {
              //equipData = $('center', data).html();
              equipData = $(data).filter('center').html();
              if(context.is(":hover"))
                ddrivetip(equipData,450);
            }
          });
        }
        else{
            ddrivetip(equipData, 450);
        }
      })
      .mouseout(hideddrivetip);
  });
}, ["profile.php", "market2.php", "market3.php", "market6.php"]);


// FEATURE: Insert emoticons into focused text input
registerFunction(function() {
	$('#sc-show-emoticons').removeAttr('onclick').click(function() {
		tamperDisplayEmoticons();
	});
}, ['.*']);

var lastFocusedInput	= null,
	cursorStrPos		= 0;

function updateFocused( jqueryObject ) {
	lastFocusedInput = jqueryObject;
}

function updateFocusListener() {
	$('input[type="text"], textarea').off().on('focus', function(){updateFocused($(this))});
}

function tamperInsertEmoticon(emoticon) {
	lastFocusedInput = lastFocusedInput || $('#chattext');
	lastFocusedInput.val(lastFocusedInput.val() + emoticon + ' ');
	lastFocusedInput.focus();
}

function tamperDisplayEmoticons() {
	var emoticonsContainer = $("#emoticons-container");

	if(!$body.hasClass("processed-emoticon-container-click-listener")) {
		emoticonsContainer.load("sidechat_emoticons.php", function() {
			$body.click(function(e) {
				if(emoticonsContainer.is(":visible")) {
					emoticonsContainer.toggle('fast');
				}
			});

			$body.addClass("processed-emoticon-container-click-listener");

			var emotes = $('#emoticons-container img[onclick]');

			$.each( emotes, function(i,v) {
				var emote	= $(this),
					click	= emote.attr('onclick');

				click = click.replace(/(InsertEmoticonSC\(')(.*)('\);?)/, '$2');

				$(this).removeAttr('onclick').attr('data-emote', click);
			});

			emotes.click(function(){
				tamperInsertEmoticon($(this).data('emote'));
			});
		});
	}

	// Toggle visibility
	window.setTimeout(function() {
		emoticonsContainer.stop(true).toggle("fast");
	});
}


// FEATURE: Dark Flame Chat Channel as side chat in WL
registerFunction( function()
{
	gangChat.init();
}, ['.*'], 'www' );

var gangChat = {
	'init' : function() {
		// Setup frame work for chat
		gangChat.chatFrame();

		// Observer for chat spam blocker

		this.config = {
			'chatLimit'			: 50,
			'timeoutIncrement'	: 500,
			'minTimeout'		: 1000,
			'maxTimeout'		: 7500
		};

		// Init
		this.currentChannel	= 'gang2';
		this.channels			= {};
		this.history			= [];
		this.historyPos			= 0;
		this.scrollPos			= 0;

		// Chat limit Init
		this.updateChatLimit();

		// Init general channel
		// Has to be done to retrieve gang chat
		this.channels['general'] = {
			'lastId'	: 0,
            'chat'		: []
		};

		// Init gang channel
		this.channels['gang2'] = {
			'lastId'	: 0,
			'chat'		: [],
			'users'		: []
		};

		this.output   = [];
		this.token    = token;
		this.timeout  = undefined;
		this.seconds  = this.config.minTimeout;

		// Init fetcher for chat
		this.chatLoop();

		var chatInput	= $('#gangchatText'),
			chatSend	= $('#gangchatSend');


		// Scroll position save
		$('#gangchat').scroll( function(e) {
			gangChat.scrollPos = $(this).scrollTop();
		});

		// FEATURE: Preload prior entry submission
		chatInput.on('keydown', function(e){
			// Which = up arrow
			if (e.which == 38) {
				e.preventDefault()

				gangChat.historyPos--;

				// Prevent less than 0
				if( gangChat.historyPos < 0 ) {
					gangChat.historyPos = 0;
				}

				$(this).val( gangChat.history[gangChat.historyPos] );
			}
			// Which = down arrow
			else if (e.which == 40)
			{
				gangChat.historyPos++;

				// Prevent greater than history length
				if (gangChat.historyPos > gangChat.history.length) {
					gangChat.historyPos = gangChat.history.length ;
				}

				// Preload prior entry
				if (gangChat.historyPos < gangChat.history.length) {
					$(this).val(gangChat.history[gangChat.historyPos]);
				}
				// At end of history, clear text
				else if (gangChat.historyPos == gangChat.history.length) {
					$(this).val('');
				}
				e.preventDefault()
			}
		});
	
		// Send chat when pressing enter
		chatInput.on('keypress', function(e){
			if (e.which == 13)
			{
				chatSend.click();
				e.preventDefault();
			}
		});
	
		// Commence the chat, clear text box
		chatSend.click(function(){
			gangChat.send(chatInput.val());

			chatInput.val('');
		});

		// 
		$('#gangchatShowEmo').click(function() {
			tamperDisplayEmoticons();
			updateFocused($('#gangchatText'));
		});

		$('#gangchatText').focus(function(){gangChat.resetTimeout()});
	},
	'chatLoop'	: function() {
		var doing_request,	
			gangChat     = this,
			postData = {
				'token'		: this.token,
				'channel'	: 'gang2'
			};
	
		// Add channel IDs for request
		$.each(this.channels, function(k, d) {
			postData[k + '_id'] = d.lastId
		});

		if (this.output.length > 0) {
			var send = this.output.shift();

			postData.chat    = send.entry;
		}

		// Prevent request stacking
		if(doing_request === true) { return; }
		doing_request = true;

		// Request for chat info
		$.ajax(
			'chat.php',
			{
				'type'		:    'POST',
				'data'		:     postData,
				'dataType'	: 'json',
				'error'		: function() {
					gangChat.timeout = setTimeout(function(){ gangChat.chatLoop(); }, gangChat.seconds);
				},
				'success': function(data) {
					gangChat.chatServerResponse(data);
				}
			}
		).always(function() {
			// When done, allow for next loop
			doing_request = false;
		});
	},
	'chatServerResponse'	: function( data ) {
		gangChat.updateChatLimit(data.chatLimit);

		if(typeof data.success !== "undefined") {
/* 			var successContainer = $('#chat-success');

			// Do not allow successes to stack.
			if(successContainer.is(":visible")) {
				return;
			}

			successContainer.html('<span>Success:</span> ' + data.success).fadeIn("fast").delay(5000).fadeOut("fast");
 */		}
		else if (data.error !== false) {
			if(data.error == "reload") {
				window.location.reload();
				return;
			}

/* 			var errorContainer = $('#chat-error');

			// Do not allow errors to stack.
			if(errorContainer.is(":visible")) {
				return;
			}

			errorContainer.html('<span>Error:</span> ' + data.error).fadeIn("fast").delay(5000).fadeOut("fast");
 */
		} else {
			var newEntry = false;

			// Update Channels
			for (var channel in data.channels) {
				// Set ID to latest for general so we dont request more than we care to receive
				if( channel == 'general' ) {
					gangChat.channels[channel].lastId = data.channels[channel].lastId;
				} else {
					// Update Users
					gangChat.channels.gang2.users = data.channels.gang2.users;
					gangChat.updateUsers();


					// When we have new chat entry IDs
					if( data.channels[channel].lastId > gangChat.channels[channel].lastId ) {
						newEntry = true;

						gangChat.channels[channel].lastId = data.channels[channel].lastId;

						for (var i=0; i < data.channels[channel].chat.length; i++)
						{
							gangChat.channels[channel].chat.push(data.channels[channel].chat[i]);

							if (gangChat.channels[channel].chat.length > gangChat.config.chatLimit)
							{
								gangChat.channels[channel].chat.shift();
							}
						}
					}
				}
			}

			if(newEntry) {
				gangChat.updateChat();
				gangChat.resetTimeout();
			} else {
				gangChat.increaseTimeout();
			}
		}

		this.timeout = setTimeout(function(){ gangChat.chatLoop(); }, gangChat.seconds);
	},
	'send'	: function( text ) {
		clearTimeout(this.timeout);

		this.history.push(text);
		this.historyPos = this.history.length;

		this.output.push({ 'entry' : text });

		this.chatLoop();
	},
	'updateChat'	: function() {
		var chatBox = $('#gangchat');

		chatBox.empty().append('<div class="gangChatBg"></div>');

		$.each(gangChat.channels.gang2.chat, function(i,entry) {
			if( entry.account.length == 0 ) {
				// For use of /me <action>
				chatBox.append('<font class="chattext">' + entry.chat + '</font>');
			} else {
				// Regular chat entries
				chatBox.append(
					'<font class="colortext"><b><a href="https://www.legacy-game.net/profile.php?p=' + entry.account + '">' + entry.account + '</a></b> : ' + entry.sentTs + '</font>',
					'<font class="chattext">' + entry.chat + '</font>'
				);
			}
		});

		chatBox.scrollTop(chatBox.prop('scrollHeight'));
	},
	// FEATURE: Updated List of Users in Gang Chat
	'updateUsers'	: function() {
		var userList = $('#gangchatUsers');

		userList.empty();

		$.each( gangChat.channels.gang2.users, function(i, user) {
			if( user.account !== 'System' ) {
				userList.append('<li><a href="https://www.legacy-game.net/profile.php?p=' + user.account + '">' + user.level + '  ' + user.account + '</a></li>');
			}
		});

		$('#userCount').html((gangChat.channels.gang2.users.length - 1));
	},
	'chatFrame'	: function() {
		var rightBar 	= $('.content-right'),
			sidebox		= '<div class="sidebox" id="gangChatSidebox"></div>',
			header		= '<div class="sidebox-header">Dark Flame Chat</div>',
			chatbox		= '<div class="sidebox-chat gangchat" id="gangchat"></div>',
			footer1		= '<div class="sidebox-footer1"></div>',
			footer2		= '<div class="sidebox-footer2" id="gangchatViewUsers">View Chat Users (<span id="userCount">1</span>)<ul id="gangchatUsers"></ul></div>';

		rightBar.append(sidebox);

		$('#gangChatSidebox').append(header + chatbox + footer1 + footer2);

		var chatInput	= '<input id="gangchatText" name="gangchat" class="chatbox" type="text" maxlength="256">',
			chatBtn		= '<input class="chatbutton" type="button" id="gangchatSend" value=">"><br>',
			chatBar		= '<img id="gangchatBar" src="img-bin/chatbar0.gif" class="chatbar">';
			chatEmo		= '<img src="/img-bin/emoticons/open-emoticons.png" id="gangchatShowEmo">';

		$('#gangChatSidebox > .sidebox-footer1').append(chatInput + chatBtn + chatBar + chatEmo);

		// CSS adjustments for chat box
		$.tamperCSS([
			'#gangchat{overflow-y:scroll;overflow-x:hidden;word-break:break-word;background-image:url("https://wiki.legacy-game.net/images/a/ac/DFLogoTransparent.png");background-position:center center;background-repeat:no-repeat;background-size:contain;background-color:rgba(0,0,0,1);}',
			'#gangchat font:last-of-type{margin-bottom:15px}',
			'#gangchatUsers{max-height:0;width:100%;margin:0;padding:0;list-style:none;font-family:"Aldrich";overflow:hidden;position:absolute;bottom:0;left:0;display:block;background-color:black;border-top:solid #333 thin;z-index:101;-webkit-transition:all 0.4s ease-out 0.4s;-moz-transition:all 0.4s ease-out 0.4s;-ms-transition:all 0.4s ease-out 0.4s;-o-transition:all 0.4s ease-out 0.4s;transition:all 0.4s ease-out 0.4s;}',
			'#gangchatViewUsers{cursor:default;position:relative}',
			'#gangchatViewUsers:hover > #gangchatUsers{max-height:500px;}',
			'#gangchatUsers > li:first-of-type{margin-top:10px}',
			'#gangchatUsers > li:last-of-type{margin-bottom:10px}',
			'#gangchatUsers > li{margin:3px 0;}',
			'#gangchatShowEmo{position:relative;top:3px;left:4px;width:14px;cursor:pointer;}',
			'.chattext{display:block}'
		]);
		updateFocusListener();
	},
	// Updates visual chat spam limit indicator
	'updateChatLimit'	: function( limit = 0 ) {
		$('#gangchatBar').attr('src', 'img-bin/chatbar' + limit + '.gif');
	},
	'resetTimeout'	: function() {
		this.seconds = this.config.minTimeout;
	},
	'increaseTimeout'	: function() {
		this.seconds += this.config.timeoutIncrement;
		if (this.seconds > this.config.maxTimeout) {
			this.seconds = this.config.maxTimeout;
		}
	}
};

// =============================================================================
//                            Hive Functions
// =============================================================================

registerFunction(function setUpPlayerCombat() {
  // FEATURE: Pre-fill attack box with first name from list.
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes.length) {
        // Set first player row as target
        if (mutation.target.className === "search_row player_row") {
          if (!$('#target').val()) {
            var player_name = $(mutation.addedNodes[0]).text().trim();
            $('#target').val(player_name);
            $('#begin').removeAttr('disabled').focus().click(function(){ $(this).blur(); });
          }
        }

        // Add click handler to 'back to search link' to clear target box
        if (mutation.target.className === "search_row") {
          var back_link = $(mutation.addedNodes).find('a:contains("Back to Search Setup")');
          if (back_link.length) {
            back_link.click(function() {
              $('#target').val('');
            });
          }
        }
      }
    });
  });
  observer.observe(
    $('#searchbox')[0], {
      subtree: true,
      childList: true,
      characterData: true
    }
  );

  // FEATURE: Show 'fight player' search results by default.
  var search_btn = $('#search');
  if (search_btn.size() === 1) {
    search_btn.click();
  }
}, ['fight.php']);


// FEATURE: Instant Vote on click
registerFunction( function()
{
	Voting.init();
}, ['voting.php'], 'www' );

var Voting,
		eligible		= $("a[onclick^='voteOpen']"),
		patience		= false,
		voteResult		= false,
		voteAttempts	= 0;

Voting = {
	'init'	: function()
	{
		this.prepVoteCap();
		this.modVoteLinks();
		this.modVoteRewards();
	},
	'modVoteLinks'	: function()
	{
		// Modify Available Votes
		if( eligible.size() > 0 )
		{
			$.each( eligible, function()
			{
				// Get Vote Attributes
				var attributes = $(this).attr("onclick");

				attributes = attributes.replace( /\); ? return false;/, "" );
				attributes = attributes.replace( /voteOpen\(/, "" );
				attributes = attributes.replace( /'/g, "" );

				var rules = attributes.split(',');

				// Remove onClick attr
				$(this).removeAttr("onClick");

				// Add Important Info Rules to Links
				$(this).attr("id", "vote" + rules[0]);

				$(this).attr("voteid", rules[0]);
				$(this).attr("votecode", rules[1]);

				$(this).addClass("voteLink");

				// Instant Vote on Click
				$(this).click( function(e)
				{
					e.preventDefault();

					Voting.checkCap(1);

					Voting.commenceVote(rules[0], rules[1]);
				});
			});
		}
	},
	'commenceVote'	: function( id, code )
	{
    if(!patience)
		{
			voteResult = false;

			var url = host.whole + '/voting.php?i=' + id + '&c=' + code;

      $.ajax({
				'url'		: url,
				'method'	: "GET",
				'data'		: 'text',
				'success'	: function()
				{
					voteResult = true;

					Voting.adjustCap();

					Voting.updateVote( id );
				},
				'error'		: function()
				{
					alert("Unable to commence vote.");
				}
			});
		} else {
			setTimeout( function(){ Voting.commenceVote( id, code ); }, 500 );
		}

		return voteResult;
	},
	'updateVote'	: function( id )
	{
		// Successful Vote, Change to "Already Voted"
		var vote		= $("#vote" + id),
			voteCell	= vote.parents("td[width='33%']"),
			voteImg		= vote.find("img");

		voteCell.html( "<font class='darktext'>" + voteImg.prop( "outerHTML" ) + "<br><b>Already Voted</b>" );
	},
	'checkCap'		: function( amount )
	{
		// Check Voting Points Cap
		var points				= parseInt( $("#votePts").text() ),
				displacement	= 75 - points;

		// When wanted vote count is more than cap space, make room
		if( amount > displacement ) {
			// Since we are running async, bypass votes if currently redeeming rewards
			patience = true;

      var makeRoomFor = 1,//amount - displacement,
					url				= $("a[href*='voting2.php?p=2']").attr('href'),
					hostRegex		= new RegExp( window.location.hostname );

			// Future Proof URL
			if( url.match( hostRegex ) === null ){
				url = host.whole + '/' + url;
			}

			// Redeem Voting Rewards through 100 Energy Point Increments
			//for( i = 0; i < makeRoomFor; i++ )
			var i = 0;

			if( true ) {
				// Call for Vote Point Redemption
				$.ajax(
				{
					'url'		: url,
					'method'	: "GET",
					'data'		: 'text',
					'success'	: function( data ) {
						if( data.match( /100 Energy Added/ ) )
						{
							// Adjust Overall Voting Points
							Voting.adjustCap( -1 );

							// Turn Vote Bypass Off
							if( i == ( makeRoomFor - 1 ) ) {
								patience = false;
							}
						}
					},
					'error'		: function() {
						alert("Unable to collect voting reward.");
					}
				});
			}
		}
	},
	// Prepare the vote cap to prevent wasted votes
	'prepVoteCap'	: function()
	{
		var points = parseInt( $("font.text:contains('/ 75')").text().replace( / \/ 75/, '' ) );

		// Add an element to change the current vote reward pts
		$("font.text:contains('/ 75')").html( "&nbsp;&nbsp;<span id='votePts'>" + points + "</span> / 75" );
	},
	// Cap adjustment, negative numbers to subtract, default call adds 1
	'adjustCap'		: function ( a = 1 )
	{
		var points = parseInt( $("#votePts").text() ),
			adjust = points + a;

		$("#votePts").html( adjust );
	},
	// Modify the voting reward links to ajax instead of page refresh
	'modVoteRewards'	: function()
	{
		var rewardLinks = $("a[href*='voting2.php']"),
			rewardTable	= $('.tabletitle:contains("Voting Points")').parents('.maintable');

		rewardTable.attr('id', 'rewardTable');

		var	selector	= "#rewardTable td.standardrow",
			rule		= selector + '{border:solid #000 thin}',
			hover		= selector + ':hover{border:solid green thin}';

		$.tamperCSS( rule, ['voting.php'] );
		$.tamperCSS( hover, ['voting.php'] );

		rewardLinks.click( function( e ) {
			e.preventDefault();

			var url					= $(this).attr( 'href' ),
					action			= parseInt( url.replace( /.*p=(\d).*/, "$1" ) ),
					hostRegex		= new RegExp( window.location.hostname ),
					successHTML		= "<tr><td width='100%' align='center' class='standardrow'><font class='colortext'>{{message}}</font></td></tr>",
					message, cost, messageRegex;

			// Future Proof URL
			if( url.match( hostRegex ) === null ) {
				url = host.whole + '/' + url;
			}

			switch( action )
			{
				case 1 :
					message			= ":: Heal + Protection Completed Successfully ::";
					messageRegex	= new RegExp( ':: Heal \+ Protection Completed Successfully ::' );
					cost			= -4;
				break;

				case 2 :
					message			= ":: 100 Energy Added Successfully ::";
					messageRegex	= new RegExp( message );
					cost			= -1;
				break;

				case 3 :
					message			= ":: 500 Energy Added Successfully ::";
					messageRegex	= new RegExp( message );
					cost			= -5;
				break;
			}

			// Call for Vote Point Redemption
			$.ajax({
				'url'		: url,
				'method'	: "GET",
				'data'		: 'text',
				'success'	: function( data ){
					if( data.match( messageRegex ) )
					{
						Voting.updateMarquee( message );

						Voting.adjustCap( cost );
					}
				},
				'error'		: function()
				{
					alert("Unable to collect voting reward.");
				}
			});
		});
	},
	// Marquee to show that voting rewards redemption
	'updateMarquee'		: function( message ) {
		var marquee	= $('#successMarquee');

		// Add marquee if there is not one established
		// Then update the message
		if( marquee.length > 0 ) {
			marquee.html( message ).removeClass('colortext').addClass('itemRare');
		} else {
			var successHTML		= "<tr><td width='100%' align='center' class='standardrow'><font id='successMarquee' class='itemRare'>{{message}}</font></td></tr>",
				modified		= successHTML.replace( /{{message}}/, message );

			$('.body-text').find('table.maintable:first').prepend( modified );
		}

		setTimeout(function(){ marquee.removeClass('itemRare').addClass('colortext'); }, 1000);
	}
}

// FEATURE: Job Count Predetermination
registerFunction( function()
{
	var energy	= Player.getEnergy(),
		cost	= parseInt( $('td:contains("Energy Cost")').siblings('td').children('font').text() ),
        cap		= parseInt( $('td:contains("Working Job Limit")').siblings('td').children('font').text() ),
		value	= Math.floor( energy / cost );

    if( value > cap ) {
        value = cap;
    }

	$('select[name="amount"]').children( "option[value='" + value + "']" ).attr( 'selected', true );
}, ['jobcenter2.php'] );


// FEATURE: Shortcut to Wasteland Rewards on Character Info
registerFunction( function()
    {
        var num		= $("td font:contains('Warfare Points')").parent().next().children(),
			text	= num.text(),
			anchor	= "<a href='" + host.whole + "/gangs9_1.php?select=2'>" + text + "</a>";
    	num.html(anchor);
    }, ['information.php']);

// =============================================================================
//                            Wasteland Functions
// =============================================================================

// Initiate Map Features
registerFunction( function()
{
	// TODO : Add map feature initialize here
}, ['map2.php'], 'www' );


// FUNCTIONALITY IMPROVEMENT: Remove the movement query on map movement
registerFunction( function() {
	var remove = window.location.search;

	if( remove.length > 0 )
	{
		var href = window.location.href.replace( remove, '' );

		history.pushState(
			// Data
            null,
			// Title
			null,
			// URL
			href
		);
	}
}, ['map2.php']);


// =============================================================================
//                            Utility Functions
// =============================================================================

// Add Custom Stylesheet To Page
$head.append('<style type="text/css" id="css-tampermonkey"></style>');

// Add to custom stylesheet via $.tamperCSS()
$.extend({
	tamperCSS	: function( style_rule, path_rules = ['.*'] ) {
		$.each( path_rules, function(i, pathname) {
			if( host.path.match(pathname) ) {
				if( typeof style_rule === 'string' ) {
					$('#css-tampermonkey').append(style_rule);
				} else if( typeof style_rule === 'array' || typeof style_rule === 'object' ) {
					$.each( style_rule, function(i, v) {
						$('#css-tampermonkey').append(v);
					});
				}
			}
		});
	}
});

// Rule Assertion
function assert(condition, msg) {
  if (!condition) {
    throw new Error(msg);
  }
}
