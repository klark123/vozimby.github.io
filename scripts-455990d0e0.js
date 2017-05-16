function isShowNewsModal(){var e=new Date,t=new Date(2017,6,1),n=864e5,i=Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()),o=Date.UTC(t.getFullYear(),t.getMonth(),t.getDate());return Math.floor((o-i)/n)>=0}window.app={registerComponent:function(e,t){e=[].concat(e);var n=e[0],i=function(e){return e?"object"==typeof e?$(e):$(".c-"+n).find(e):$(".c-"+n)};$.extend(i,$);var o=t(i);e.forEach(function(e){window.app[e]=o}),$(function(){o.init&&o.init()})}},window.app.registerComponent("analytics",function(e){return{init:function(){},reachGoal:function(){"undefined"!=typeof document.yaCounter25294952&&document.yaCounter25294952.reachGoal(name)}}}),window.app.registerComponent("city-checker",function(e){return{isReady:!1,init:function(){e("#checkcityinp").bind("focus",e.proxy(this.prepareData,this)),e("#citychecker").bind("submit",this.handleSubmit)},prepareData:function(){this.isReady||(this.isReady=!0,document.availibleCities=[],document.availibleCitiesLabels=[],window.app.storage.get("schedule",function(t){t.forEach(function(e){document.availibleCities.push(e[0]),document.availibleCitiesLabels.push(e[1])}),e("#checkcityinp").typeahead({source:document.availibleCities})}))},handleSubmit:function(t){t.preventDefault(),e("#citychecker-result").text("ищем ..."),window.app.analytics.reachGoal("SpisokGorodov");var n=function(e,t){var n=t.replace(".","\\.").replace("(","\\(").replace(")","\\)"),i=new RegExp(n+".*","i"),o=-1;return e.forEach(function(e,t){i.test(e)&&(o=t)}),o},i=e("#checkcityinp").val();i=i.charAt(0).toUpperCase()+i.slice(1);var o=n(document.availibleCities,i);o==-1?e("#citychecker-result").html("Данного города нет в списке основных городов.<br/> Уточнить сроки и стоимость доставки Вы можете по тел. 6666-565"):e("#citychecker-result").text(document.availibleCitiesLabels[o])}}}),window.app.registerComponent("header",function(e){return{init:function(){this.handleSocialButtons()},handleSocialButtons:function(){e(".socnet .soc_btn").tooltip({html:!0,animation:!1,trigger:"click"}),jQuery("body").click(function(t){e(t.target).hasClass("soc_btn")||e(".socnet .tooltip.bottom").remove()}),e(".socnet .soc_btn").bind("mouseenter",function(){e(".socnet .soc_btn.showed").removeClass("showed").trigger("click"),e(this).addClass("showed").trigger("click")}).bind("click",function(){e(this).hasClass("clicked")?e(this).removeClass("clicked"):e(this).addClass("clicked"),e(".socnet .soc_btn.clicked").each(function(){e(this).hasClass("showed")||e(this).trigger("click")})})}}}),window.app.registerComponent("hero",function(e){return{init:function(){e(".map_hint a").tooltip({html:!0,animation:!1}),this.animateClouds()},animateClouds:function(){setInterval(function(){var e=jQuery("#cloud_1");e.animate({left:"1000px"},95e3),e.animate({left:"-100px"},11e4)},3),setInterval(function(){var e=jQuery("#cloud_2");e.animate({left:"-100px"},55e3),e.animate({left:"1000px"},11e4)},3),setInterval(function(){var e=jQuery("#cloud_3");e.animate({left:"-100px"},95e3),e.animate({left:"1000px"},11e4)},3),setInterval(function(){var e=jQuery("#cloud_4");e.animate({left:"1000px"},95e3),e.animate({left:"-100px"},11e4)},3),setInterval(function(){var e=jQuery("#cloud_5");e.animate({left:"-100px"},85e3),e.animate({left:"1000px"},11e4)},3),setInterval(function(){var e=jQuery("#sun_clouds");e.animate({left:"16px"},8500),e.animate({left:"56px"},8500)},3),setInterval(function(){var e=jQuery("#cloudbg");e.animate({left:"468px"},8500),e.animate({left:"508px"},8500)},3),setInterval(function(){var e=jQuery("#sun");e.animate({borderSpacing:30},{step:function(e,t){jQuery(this).css("-webkit-transform","rotate("+e+"deg)"),jQuery(this).css("-moz-transform","rotate("+e+"deg)"),jQuery(this).css("-ms-transform","rotate("+e+"deg)"),jQuery(this).css("-o-transform","rotate("+e+"deg)"),jQuery(this).css("transform","rotate("+e+"deg)")},duration:7200},"linear"),e.animate({borderSpacing:0},{step:function(e,t){jQuery(this).css("-webkit-transform","rotate("+e+"deg)"),jQuery(this).css("-moz-transform","rotate("+e+"deg)"),jQuery(this).css("-ms-transform","rotate("+e+"deg)"),jQuery(this).css("-o-transform","rotate("+e+"deg)"),jQuery(this).css("transform","rotate("+e+"deg)")},duration:7200},"linear")},0)}}}),window.app.registerComponent("job-form",function(e){return{init:function(){e(".jobinfo:first").focus(),e("form").bind("submit",e.proxy(this.handleSubmit,this))},handleError:function(){alert("Что-то пошло не так. Свяжитесь с нами по телефону или по почте.")},handleSuccess:function(e){e&&"success"==e?(alert("Спасибо! Ваше резюме будет рассмотрено в ближайшее время."),location.href="/"):this.handleError()},handleSubmit:function(t){t.preventDefault(),t.stopPropagation(),window.app.storage.apiPost("job",e("form").serialize()).done(e.proxy(this.handleSuccess,this)).fail(e.proxy(this.handleError,this))}}}),window.app.registerComponent(["page-index","page"],function(e){return{init:function(){}}}),window.app.registerComponent("popup-news",function(e){return{init:function(){!Cookies.get("msk")&&isShowNewsModal()&&(jQuery("#news-modal").modal("show"),Cookies.set("msk",1))}}}),window.app.registerComponent("popup-opinions",function(e){return{init:function(){this.handleFormInput(),this.handleSubmit()},handleFormInput:function(){e("#dont-chk, #blagod-chk").on("change",function(t){var n=e(this).prop("checked");e(this).parent().find(".by-details").toggle(n),e(this).parent().find(".by-passport").toggle(!n)})},handleErrorMsg:function(){alert("Что-то пошло не так. Свяжитесь с нами по телефону или по почте.")},handleError:function(e){if(e.responseJSON){for(var t in e.responseJSON)break;alert(e.responseJSON[t][0])}else this.handleErrorMsg()},handleSuccess:function(t,n){n&&"success"==n?(e(".modal-content").find(".close").trigger("click"),alert("courierinfo"==t?"Спасибо! Ваша благодарность принята.":"Спасибо! Ваша жалоба принята.")):this.handleErrorMsg()},handleSubmit:function(){var t=this;e("form").bind("submit",function(n){n.preventDefault();var i=e(n.target).attr("id");window.app.storage.apiPost("review",e(n.target).serialize()).done(e.proxy(t.handleSuccess,t,i)).fail(e.proxy(t.handleError,t))})}}}),window.app.registerComponent("price-checker",function(e){return{isLocationReady:!1,isRatesReady:!1,init:function(){e(".tip").tooltip({html:!0,animation:!1}),e(".prettyCheckable").each(function(){e(this).prettyCheckable()}),e(".js-form input").change(function(){""==e(this).val()?e(this).removeClass("filled"):e(this).addClass("filled")}),e("input.digit-only").bind("keyup change",function(){/\D/g.test(this.value)&&(this.value=this.value.replace(/\D/g,""))}),e(".byn-input").inputmask("decimal",{radixPoint:",",digits:2,autoGroup:!0,groupSeparator:" ",allowMinus:!1,rightAlign:!1,onBeforeMask:function(e,t){return"0.00"==e?"":(""+e).replace(".",",")}});var t=e("#calculation").first();if(0!=t.size()){var n=function(e){return(""+parseFloat(e).toFixed(2)).replace(".",",")+" руб."},i=function(e){return e.replace(/([0-9]{2}[.][0-9]{2})[.0-9]{5}/g,"$1")},o=function(){var n=!1;return t.find('input[type="text"]:visible').each(function(){""==e(this).val()&&(n=!0)}),t.find("select:visible").not(".dependent-sub").not("#clc-typeid").each(function(){""==e(this).val()&&(n=!0)}),n},a=function(e){t.find("#clc-result").html('<div class="noresult">'+e+"</div>")};t.find("#clc-sender").change(function(){t.find(".control-group-ctselect option:first").prop("selected",!0),t.find(".control-group-typeid select:first option:first").prop("selected",!0),t.find(".control-group-typeid select:gt(0)").css("display","none"),t.find('input[type="text"]').removeClass("filled").val(""),t.find('input[type="checkbox"]').removeClass("filled").prop("checked",!1),t.find(".prettycheckbox a.checked").removeClass("checked");var n=e(this).val();"0"==n?(t.find(".control-group-typeid, .control-group-dimension, .control-group-cost, .control-group-locality, .control-group-additional").addClass("hidden"),t.find(".control-group-cost").addClass("force-hidden")):"1"==n&&(t.find(".control-group-ctselect, .control-group-dimension, .control-group-cost, .control-group-locality, .control-group-additional").addClass("hidden"),t.find(".control-group-cost").removeClass("force-hidden")),t.find(".control-group-ctselect").removeClass("hidden")});var s=this;t.find("#clc-calculation-type").change(function(){s.fetchRates(),s.fetchLocation();var n=e(this).val();return"- выберите -"==n?void e(this).parent().removeClass("filled"):(e(this).parent().addClass("filled"),t.find("#clc-goodcost").val(""),void("2"==n?(t.find(".control-group-typeid").addClass("hidden"),t.find(".control-group-dimension").removeClass("hidden"),t.find(".control-group-dimension input").keyup(function(){var n=function(){var n=!0;return t.find(".control-group-dimension input").each(function(){""==e(this).val()&&(n=!1)}),n};n()&&t.find(".control-group-locality").removeClass("hidden")}),t.find(".control-group-cost").addClass("force-hidden"),t.find(".control-group-cost:visible").addClass("hidden")):"1"==n&&(t.find(".control-group-typeid").removeClass("hidden"),t.find(".control-group-dimension").addClass("hidden"),t.find(".control-group-dimension input").val(""),t.find(".control-group-cost").removeClass("force-hidden"))))}),t.find("input, select").bind("change keyup",function(e){t.find("#clc-result").html(""),t.find(".control-group:visible").removeClass("last"),t.find(".control-group:visible:last").addClass("last")}),t.bind("submit",function(e){return e.preventDefault(),e.stopPropagation(),o()?void a("Заполните все поля"):(a("Считаем ..."),window.app.analytics.reachGoal("Kalculator"),void window.app.storage.apiPost("calculator",t.serialize()).done(function(e){var o=3,a=2,s=1,r="minimal",l="custom",c=t.find("#clc-result").first();if(e[l]&&e[l].enabled)return void c.html('<div class="exp clearfix">          <span class="custominfo">Требуется индивидуальный расчет - пожалуйста свяжитесь с нами 6666-565</span>           </div>');if(e[r]&&e[r].enabled)return void c.html('<div class="exp clearfix">          <span class="cost">от '+n(e[r].cost)+'</span>          <span class="mininfo">- узнать более 6666-565</span>           </div>');var d="";e[a].enabled&&(d='<div class="std clearfix">          <span class="lbl">Стандарт</span>          <span class="cost">'+n(e[a].cost)+'</span>          <span class="dates">'+i(e[a].days)+"</span>          </div>"),c.html('<div class="exp clearfix">          <span class="lbl">Экспресс</span>          <span class="cost">'+n(e[s].cost)+'</span>          <span class="dates">'+i(e[s].days)+"</span>          </div>"+d+'<div class="eco clearfix">          <span class="lbl">Эконом</span>          <span class="cost">'+n(e[o].cost)+'</span>          <span class="dates">'+i(e[o].days)+'</span>          </div><div class="inf"><span>Ближайшие дни доставки</span></div>')}).fail(function(){a("На данный момент калькулятор недоступен")}))})}},fetchLocation:function(){if(!this.isLocationReady){this.isRatesReady=!0;var t=e("#calculation").first(),n=jQuery("#calculator-map-modal").first(),i=function(t,i){n.find(".modal-title").text(i);var o=t.find(".watch-on-map").first();o.removeClass("filled");var a=new google.maps.Geocoder;a.geocode({address:i,region:"by"},function(t,i){i==google.maps.GeocoderStatus.OK&&(o.addClass("filled"),o.unbind("click").click(function(){e(this).hasClass("filled")&&(n.modal("show"),n.find(".close").unbind("click").click(function(){n.modal("hide")}),setTimeout(function(){var e=new google.maps.DirectionsRenderer,n=new google.maps.DirectionsService,i=new google.maps.LatLng(53.9,27.566666),o=new google.maps.Map(document.getElementById("calculator-map-canvas"),{zoom:10,center:i});e.setMap(o),o.setCenter(t[0].geometry.location);new google.maps.Marker({map:o,position:t[0].geometry.location});n.route({origin:i,destination:t[0].geometry.location,travelMode:google.maps.TravelMode.DRIVING},function(t,n){n==google.maps.DirectionsStatus.OK&&e.setDirections(t)})},200))}))})};window.app.storage.get("location",function(n){t.find(".clc-locality-input").typeahead({source:n,matcher:function(e){var t=this.query.toLowerCase(),n=e;1==t.split(" ").length&&(n=e.split(" ")[0]);var i=new RegExp(".*"+t+".*","i");return i.test(n)}}).bind("change blur",function(){var o=e(this).parents(".control-group-locality").first();if(n.indexOf(e(this).val())===-1)e(this).val(""),o.find(".watch-on-map").removeClass("filled");else{t.find(".control-group-additional").removeClass("hidden"),t.find(".control-group:visible").removeClass("last"),t.find(".control-group:visible:last").addClass("last");var a=e(this).val(),s="";(parts=a.match(/(.+) \(([^,]+), ([^,]+)\)/))?s=parts[1]+", Беларусь":(parts=a.match(/(.+) \(([^,]+)\)/))&&(s="город "+parts[1]+", "+parts[2]+", Беларусь"),i(o,s.replace("обл.","область"))}if("locality-from"==e(this).attr("name")){var r=e(this).val(),l=t.find(".controls-fromstore");"Минск (Минский р-н, Минская обл.)"==r?l.removeClass("hidden"):l.addClass("hidden")}})})}},fetchRates:function(){if(!this.isRatesReady){this.isRatesReady=!0;var t=e("#calculation").first();window.app.storage.get("rates",function(n){var i=t.find("#clc-typeid");i.append(jQuery(n)),i.dependentSelects({placeholderOption:"- выберите -"}),i.parent().find("select").change(function(){var n=i.parent().find("select:visible:last"),o=n.children("option");if(2==o.size()){var a=o.last();a.prop("selected")||(a.prop("selected",!0).attr("selected","selected"),n.trigger("change"))}var s=i.parent().find("select:visible option:selected:last"),r=s.val();if("- выберите -"==r)return void e(this).parent().removeClass("filled");e(this).parent().addClass("filled");var l=s.data("cast");"1"==l?t.find(".control-group-dimension").removeClass("hidden"):t.find(".control-group-dimension").addClass("hidden"),t.find(".control-group-cost:not(.force-hidden)").size()>0?(t.find(".control-group-cost:not(.force-hidden)").removeClass("hidden"),t.find(".control-group-cost input").bind("keyup",function(){t.find(".control-group-locality").removeClass("hidden"),t.find(".control-group-additional").removeClass("hidden")})):(t.find(".control-group-locality").removeClass("hidden"),t.find(".control-group-additional").removeClass("hidden")),t.find(".control-group:visible").removeClass("last"),t.find(".control-group:visible:last").addClass("last")})})}}}}),window.app.registerComponent("status-checker",function(e){return{init:function(){e("#rstatus").bind("submit",this.handleSubmit)},handleSubmit:function(t){t.preventDefault(),t.stopPropagation(),window.app.analytics.reachGoal("Otslejivanie");var n=e("#rst-series").val(),i=e("#rst-number").val();return""==n||""==i?void alert("Заполните все поля"):void window.app.storage.apiPost("rstatus",{series:n,number:i}).done(function(t){var n=e("#rstatus-result");n.find(".rstatus-res").addClass("hidden"),"Доставляется"==t.substr(0,12)?n.find(".delivery").removeClass("hidden"):"Заказ на"==t.substr(0,8)?(n.find(".process div").html(t),n.find(".process").removeClass("hidden")):"Доставлено"==t?n.find(".delivered").removeClass("hidden"):"Доставка"==t.substr(0,8)?(n.find(".planed div").html(t),n.find(".planed").removeClass("hidden")):"Возврат"==t?n.find(".return").removeClass("hidden"):alert(t)}).fail(function(){alert("Проверка статуса заявки временно недоступна. Свяжитесь с нами по телефону или по почте.")})}}});var API_ADDRESS="//api.vozim.by/";window.app.registerComponent("storage",function(e){return{_rawdata:{},get:function(e,t,n){if("undefined"!=typeof this._rawdata[e])return t(this._rawdata[e]);var i=this;return this.apiGet(e,n).done(function(n){i._rawdata[e]=n,t(n)}),this},apiGet:function(e,t){return jQuery.get(API_ADDRESS+e,t)},apiPost:function(e,t){return jQuery.post(API_ADDRESS+e,t)}}}),window.app.registerComponent("svg-replace",function(e){return{init:function(){e().each(function(){var e=jQuery(this),t=e.attr("id"),n=e.attr("class"),i=e.attr("src");jQuery.get(i,function(i){var o=jQuery(i).find("svg");"undefined"!=typeof t&&(o=o.attr("id",t)),"undefined"!=typeof n&&(o=o.attr("class",n)),o=o.removeAttr("xmlns:a"),e.replaceWith(o)},"xml")})}}});