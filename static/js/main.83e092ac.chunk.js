(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{136:function(e,a,t){e.exports=t(317)},141:function(e,a,t){},317:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(18),l=t.n(o),s=(t(141),t(20)),i=t(21),c=t(23),u=t(22),h=t(24),m=t(16),d=t(74),p=t(118),y=t.n(p),k=Object(m.createMuiTheme)({palette:{primary:d.teal,secondary:d.blue},typography:{useNextVariants:!0}});var _=function(e){return function(a){return r.a.createElement(m.MuiThemeProvider,{theme:k},r.a.createElement(y.a,null),r.a.createElement(e,a))}},f=t(58),b=t.n(f),g=t(14),C=t.n(g),E=t(27),v=t.n(E),O=t(134),w=t.n(O),S=t(56),L=t.n(S),j=t(37),N=t(57),A=t(135),x=t(29),R=t.n(x),M=t(119),D=t(72),F=t.n(D),V=t(120),B=t.n(V),I=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).handleChange=function(e){var a=t.props.onChange,n=e.target.value;a&&a(n)},t.renderOptions=function(){var e=t.props,a=e.label,n=e.options;return Object.keys(n).map(function(e){var t=n[e];return r.a.createElement("option",{key:"select_"+a.toLowerCase()+"_"+e,value:e},t)})},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.dense,n=e.label,o=e.hideLabel,l=e.selectedOption,s=e.defaultLabel,i=e.defaultValue,c=e.disabled;return r.a.createElement("div",{className:Object(M.a)({},a.root,{maxWidth:!0===t?80:void 0})},!0!==o&&r.a.createElement(C.a,{variant:"h5"},n,r.a.createElement("span",{className:a.required},"*")),r.a.createElement(F.a,{className:a.formControl,style:{margin:!0===t?0:12}},r.a.createElement(B.a,{disabled:c,value:l,onChange:this.handleChange,name:"select_"+n.toUpperCase,className:a.selectEmpty},r.a.createElement("option",{key:"select_"+n.toLowerCase()+"_none",value:i||""},s||"None"),this.renderOptions())))}}]),a}(r.a.Component),T=Object(m.withStyles)(function(e){return{root:{display:"flex",flexWrap:"wrap",flexDirection:"column"},formControl:{maxWidth:180},required:{color:"red"}}})(I),W=t(121),z=t.n(W),H=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).state={selectedValue:-1},t.handleChange=function(e){var a=t.props.onChange,n=parseInt(e.target.value);a&&a(n+1),t.setState({selectedValue:n})},t.renderRadioButtons=function(){var e=t.props,a=e.classes,n=e.label;return Array.apply(null,{length:5}).map(Number.call,Number).map(function(e){return r.a.createElement(z.a,{key:"linear_scale_"+n.toLowerCase()+"_"+e,checked:t.state.selectedValue===e,onChange:t.handleChange,value:e,classes:{root:a.button,checked:a.checked}})})},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.label,n=e.leftLabel,o=e.rightLabel;return r.a.createElement("div",null,r.a.createElement(C.a,{variant:"subtitle2"},t,r.a.createElement("span",{className:a.required},"*")),r.a.createElement("div",{className:a.wrapper},r.a.createElement(C.a,{variant:"subtitle2"},n),r.a.createElement("div",{className:a.buttons},this.renderRadioButtons()),r.a.createElement(C.a,{variant:"subtitle2",align:"right"},o)))}}]),a}(r.a.Component),K=Object(m.withStyles)(function(e){return{button:{alignSelf:"center",padding:2,"&$checked":{color:e.palette.primary.main}},checked:{},wrapper:{marginTop:2*e.spacing.unit,display:"flex",flexDirection:"row",justifyContent:"left"},buttons:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:16,marginRight:16},required:{color:"red"}}})(H),q=t(124),P=t.n(q),U=t(126),J=t.n(U),G=t(122),Y=t.n(G),Q=t(125),Z=t.n(Q),$=t(75),X=t.n($),ee=t(123),ae=t.n(ee),te=function(e){return{root:{marginTop:3*e.spacing.unit,overflowX:"scroll"},table:{minWidth:"100% !important",width:"100% !important"},tableCell:{whiteSpace:"nowrap",textOverflow:"ellipsis"}}},ne=Object(m.withStyles)(function(e){return{root:Object(j.a)({},e.breakpoints.down("xs"),{maxWidth:"120px !important"})}})(Y.a),re=0;function oe(e,a){return{id:re+=1,label:e,size:a}}var le=[oe('< 8"',"lt8"),oe('8" - 9.9\u201d',"8"),oe('10" - 11.9\u201d',"10"),oe('12" - 13.9\u201d',"12"),oe("14 - 15.9\u201d","14"),oe('16" - 17.9\u201d',"16"),oe('18" - 19.9\u201d',"18"),oe('>= 20"',"gte20")],se=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(o)))).handleChange=function(e,a){var n=t.props.onChange;n&&n(e,a)},t.range=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t={};return Array.from(Array(e).keys()).forEach(function(e,n){t[n+a]=n+a}),t},t.renderRow=function(e){var a=t.props,n=a.formState,o=a.fish,l=a.fish_id,s=t.props.selectedOptions||{},i=[],c=[l+"_kept_"+e.size,l+"_released_"+e.size,l+"_ad_clip_"+e.size];i.push(r.a.createElement(ne,{key:"cell_header_"+e.size,component:"th",scope:"row"},e.label));for(var u="Kokanee"===o?3:2,h=function(){var e=c[m],a=3===u&&2===m?(parseInt(n[c[0]])||0)+(parseInt(n[c[1]])||0):40;i.push(r.a.createElement(ne,{key:"cell_"+e},r.a.createElement(T,{defaultValue:0,defaultLabel:"0",label:"",hideLabel:!0,options:t.range(a),selectedOption:s[e],onChange:function(a){console.log(e,a),t.handleChange(e,a)}})))},m=0;m<u;m++)h();return i},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.classes,n=a.fish,o={root:{maxWidth:"50px !important"}};return r.a.createElement("span",null,r.a.createElement(C.a,{variant:"h6"},n),r.a.createElement(ae.a,{smUp:!0},r.a.createElement(C.a,{variant:"subtitle2",className:te.underline},r.a.createElement("strong",null,"You may need scroll right to view all information"))),r.a.createElement(v.a,{className:t.root},r.a.createElement(P.a,{className:t.table,padding:"dense",style:{width:"auto",tableLayout:"auto"}},r.a.createElement(Z.a,{className:t.tableBody},r.a.createElement(X.a,null,r.a.createElement(ne,{style:{maxWidth:"50px !important"}},"Size"),r.a.createElement(ne,{align:"left",style:o},"Kept"),r.a.createElement(ne,{align:"left",style:o},"Released"),"Kokanee"===n&&r.a.createElement(ne,{align:"left",style:o},"Fin Clipped"))),r.a.createElement(J.a,{className:t.tableBody},le.map(function(a){return r.a.createElement(X.a,{key:a.id},e.renderRow(a))})))))}}]),a}(r.a.Component),ie=Object(m.withStyles)(te)(se),ce={lake_almanor:"Lake Almanor",bass_lake:"Bass Lake",boca_reservoir:"Boca Reservoir",bowman_lake:"Bowman Lake",bucks_lake:"Bucks Lake",bullards_bar_reservoir:"Bullards Bar Reservoir",donner_lake:"Donner Lake",folsom_lake:"Folsom Lake",hellhole_reservoir:"Hellhole Reservoir",huntington_lake:"Huntington Lake",lake_berryessa:"Lake Berryessa",lake_don_pedro:"Lake Don Pedro",lake_mcclure:"Lake McClure",lake_oroville:"Lake Oroville",lake_pardee:"Lake Pardee",lake_spaulding:"Lake Spaulding",lake_tahoe:"Lake Tahoe",little_grass_valley:"Little Grass Valley",new_melones_reservoir:"New Melones Reservoir",pine_flat_lake:"Pine Flat Lake",shasta_lake:"Shasta Lake",shaver_lake:"Shaver Lake",stampede_reservoir:"Stampede Reservoir",trinity_lake:"Trinity Lake","twin_lakes,_upper":"Twin Lakes, Upper",union_valley_reservoir:"Union Valley Reservoir",whiskeytown_lake:"Whiskeytown Lake"},ue={alpine:"Alpine County",amador:"Amador County",butte:"Butte County",calaveras:"Calaveras County",colusa:"Colusa County",contra_costa:"Contra Costa County",del_norte:"Del Norte County",el_dorado:"El Dorado County",fresno:"Fresno County",glenn:"Glenn County",humboldt:"Humboldt County",imperial:"Imperial County",inyo:"Inyo County",kern:"Kern County",kings:"Kings County",lake:"Lake County",lassen:"Lassen County",los_angeles:"Los Angeles County",madera:"Madera County",marin:"Marin County",mariposa:"Mariposa County",mendocino:"Mendocino County",merced:"Merced County",modoc:"Modoc County",mono:"Mono County",monterey:"Monterey County",napa:"Napa County",nevada_county:"Nevada County",orange:"Orange County",placer:"Placer County",plumas:"Plumas County",riverside:"Riverside County",sacramento:"Sacramento County",san_benito:"San Benito County",san_bernardino:"San Bernardino County",san_diego:"San Diego County",san_francisco:"San Francisco County",san_joaquin:"San Joaquin County",san_luis_obispo:"San Luis Obispo County",san_mateo:"San Mateo County",santa_barbara:"Santa Barbara County",santa_clara:"Santa Clara County",santa_cruz:"Santa Cruz County",shasta:"Shasta County",sierra:"Sierra County",siskiyou:"Siskiyou County",solano:"Solano County",sonoma:"Sonoma County",stanislaus:"Stanislaus County",sutter:"Sutter County",tehama:"Tehama County",trinity:"Trinity County",tulare:"Tulare County",tuolumne:"Tuolumne County",ventura:"Ventura County",yolo:"Yolo County",yuba:"Yuba County",alabama:"Alabama",alaska:"Alaska",american_samoa:"American Samoa",arizona:"Arizona",arkansas:"Arkansas",colorado:"Colorado",connecticut:"Connecticut",delaware:"Delaware",district_of_columbia:"District of Columbia",federated_states_of_micronesia:"Federated States of Micronesia",florida:"Florida",georgia:"Georgia",guam:"Guam",hawaii:"Hawaii",idaho:"Idaho",illinois:"Illinois",indiana:"Indiana",iowa:"Iowa",kansas:"Kansas",kentucky:"Kentucky",louisiana:"Louisiana",maine:"Maine",marshall_islands:"Marshall Islands",maryland:"Maryland",massachusetts:"Massachusetts",michigan:"Michigan",minnesota:"Minnesota",mississippi:"Mississippi",missouri:"Missouri",montana:"Montana",nebraska:"Nebraska",nevada:"Nevada",new_hampshire:"New Hampshire",new_jersey:"New Jersey",new_mexico:"New Mexico",new_york:"New York",north_carolina:"North Carolina",north_dakota:"North Dakota",northern_mariana_islands:"Northern Mariana Islands",ohio:"Ohio",oklahoma:"Oklahoma",oregon:"Oregon",palau:"Palau",pennsylvania:"Pennsylvania",puerto_rico:"Puerto Rico",rhode_island:"Rhode Island",south_carolina:"South Carolina",south_dakota:"South Dakota",tennessee:"Tennessee",texas:"Texas",utah:"Utah",vermont:"Vermont",virgin_island:"Virgin Island",virginia:"Virginia",washington:"Washington",west_virginia:"West Virginia",wisconsin:"Wisconsin",wyoming:"Wyoming",other:"Other"},he={az:"AZ",or:"OR",wa:"WA",other:"Other"},me={kokanee:"Kokanee",chinook:"Chinook",both:"Both"},de=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(c.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={selectedDate:new Date,state:"ca",submit:!1},t.formComplete=function(){var e=t.state,a=e.selectedDate,n=e.lake,r=e.numOfAnglers,o=e.numOfHoursFished,l=e.numOfRods,s=e.state,i=e.residence,c=e.sat_overall,u=e.sat_numOfFish,h=e.sat_sizeOfFish;return a&&n&&r&&o&&l&&s&&i&&c&&u&&h},t.handleDateChange=function(e){t.setState({selectedDate:e})},t.range=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,t={};return Array.from(Array(e).keys()).forEach(function(e,n){t[n+a]=n+a}),t},t.handleChange=function(e,a){""===a&&(a=void 0),t.setState(Object(j.a)({},e,a))},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentWillUpdate",value:function(e,a){console.log(a)}},{key:"render",value:function(){var e=this,a=this.props.classes,t=this.state.selectedDate,n={"entry.1113825212":t.getFullYear()+"-"+("0"+(t.getMonth()+1)).slice(-2)+"-"+("0"+t.getDate()).slice(-2),"entry.978780858":ce[this.state.lake],"entry.544223057":this.state.numOfAnglers,"entry.465386035":this.state.numOfHoursFished,"entry.2083749126":this.state.numOfRods,"entry.1594605968":"n/a"===this.state.residence?"N/A":ue[this.state.residence],"entry.1774382335":"ca"===this.state.state?"CA":he[this.state.state],"entry.245010161":this.state.targetedSpecies,"entry.926315835":this.state.kokanee_kept_lt8||0,"entry.1168566108":this.state.kokanee_released_lt8||0,"entry.182249114":this.state.kokanee_kept_8||0,"entry.1899785101":this.state.kokanee_released_8||0,"entry.1826766183":this.state.kokanee_kept_10||0,"entry.2118288753":this.state.kokanee_released_10||0,"entry.1846482354":this.state.kokanee_kept_12||0,"entry.1509350859":this.state.kokanee_released_12||0,"entry.1460011487":this.state.kokanee_kept_14||0,"entry.436313363":this.state.kokanee_released_14||0,"entry.1425365122":this.state.kokanee_kept_16||0,"entry.380712182":this.state.kokanee_released_16||0,"entry.414278670":this.state.kokanee_kept_18||0,"entry.607088307":this.state.kokanee_released_18||0,"entry.2050628999":this.state.kokanee_kept_gte20||0,"entry.1190430582":this.state.kokanee_released_gte20||0,"entry.502757154":this.state.chinook_kept_lt8||0,"entry.1717172748":this.state.chinook_released_lt8||0,"entry.1161055011":this.state.chinook_kept_8||0,"entry.1068593095":this.state.chinook_released_8||0,"entry.163459983":this.state.chinook_kept_10||0,"entry.1662185936":this.state.chinook_released_10||0,"entry.1380958071":this.state.chinook_kept_12||0,"entry.1239720748":this.state.chinook_released_12||0,"entry.1207753498":this.state.chinook_kept_14||0,"entry.1538963740":this.state.chinook_released_14||0,"entry.143882022":this.state.chinook_kept_16||0,"entry.1209645714":this.state.chinook_released_16||0,"entry.576771471":this.state.chinook_kept_18||0,"entry.1123048741":this.state.chinook_released_18||0,"entry.574251591":this.state.chinook_kept_gte20||0,"entry.1877388184":this.state.chinook_released_gte20||0,"entry.1213613591":this.state.sat_overall,"entry.486866884":this.state.sat_numOfFish,"entry.162065823":this.state.sat_sizeOfFish,"entry.877114646":this.state.kokanee_ad_clip_lt8||0,"entry.921596154":this.state.kokanee_ad_clip_8||0,"entry.1062659070":this.state.kokanee_ad_clip_10||0,"entry.520944888":this.state.kokanee_ad_clip_12||0,"entry.801137358":this.state.kokanee_ad_clip_14||0,"entry.19730656":this.state.kokanee_ad_clip_16||0,"entry.470753667":this.state.kokanee_ad_clip_18||0,"entry.1678122272":this.state.kokanee_ad_clip_gte20||0};return console.log("states:",he),console.log("state:",this.state),console.log("submission:",n),r.a.createElement("div",null,!this.state.submit&&r.a.createElement("div",null,r.a.createElement(C.a,{variant:"h4"},"Location and Angling Information"),r.a.createElement("br",null),r.a.createElement(C.a,{variant:"body1"},"Required fields are marked with a ",r.a.createElement("span",{className:a.required},"*")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(C.a,{variant:"h5"},"Date",r.a.createElement("span",{className:a.required},"*")),r.a.createElement(N.b,{utils:A.a},r.a.createElement(N.a,{keyboard:!0,value:t,onChange:this.handleDateChange})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{label:"Lake",options:ce,selectedOption:this.state.lake,onChange:function(a){return e.handleChange("lake",a)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{label:"Number of Anglers",defaultValue:0,defaultLabel:"0",options:this.range(10),selectedOption:this.state.numOfAnglers,onChange:function(a){return e.handleChange("numOfAnglers",a)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{label:"Number of Hours Fished",defaultValue:0,defaultLabel:"0",options:this.range(12),selectedOption:this.state.numOfHoursFished,onChange:function(a){return e.handleChange("numOfHoursFished",a)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{label:"Number of Rods Used",defaultValue:0,defaultLabel:"0",options:this.range(10),selectedOption:this.state.numOfRods,onChange:function(a){return e.handleChange("numOfRods",a)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(T,{label:"State of Residence",noNone:!0,options:he,selectedOption:this.state.state,defaultLabel:"CA",defaultValue:"ca",onChange:function(a){e.handleChange("state",a),"ca"!==a?e.handleChange("residence","n/a"):e.handleChange("residence","")}}),r.a.createElement("br",null),r.a.createElement("br",null),"ca"===this.state.state&&r.a.createElement("span",null,r.a.createElement(T,{label:"County of Residence",disabled:"ca"!==this.state.state,options:ue,selectedOption:this.state.residence,defaultLabel:"Alameda County",defaultValue:"alameda",onChange:function(a){e.handleChange("residence",a)}}),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(T,{label:"Targeted Species",options:me,selectedOption:this.state.targetedSpecies,onChange:function(a){return e.handleChange("targetedSpecies",a)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(C.a,{variant:"h4"},"Fish Information"),r.a.createElement("br",null),r.a.createElement(ie,{formState:this.state,fish_id:"kokanee",fish:"Kokanee",onChange:function(a,t){return e.handleChange(a,t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(ie,{formState:this.state,fish_id:"chinook",fish:"Inland Chinook",onChange:function(a,t){return e.handleChange(a,t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("hr",null),r.a.createElement(C.a,{variant:"h4"},"Feedback"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(K,{label:"Overall Angling Experience Today",leftLabel:"Very Dissatisfied",rightLabel:"Very Satisfied",onChange:function(a){return e.handleChange("sat_overall",a)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(K,{label:"Number of Fish",leftLabel:"Very Dissatisfied",rightLabel:"Very Satisfied",onChange:function(a){return e.handleChange("sat_numOfFish",a)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(K,{label:"Size of Fish",leftLabel:"Very Dissatisfied",rightLabel:"Very Satisfied",onChange:function(a){return e.handleChange("sat_sizeOfFish",a)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(R.a,{color:"primary",variant:"contained",disabled:!this.formComplete(),onClick:function(){return e.setState({submit:!0})}},"Submit")),this.state.submit&&r.a.createElement("div",null,r.a.createElement(C.a,{variant:"h6",style:{textAlign:"center"}},"Thank you for filling out the survey"),r.a.createElement("iframe",{title:"submit window",style:{display:"none",height:0,width:0},src:"https://docs.google.com/forms/d/e/1FAIpQLSfK8v4xHnetEJH9B_qRJ9W6_gOQHRQgvUZf-Ms90eL-roJnZg/formResponse?usp=pp_url&submit=Submit&"+Object.keys(n).map(function(e){return e+"="+n[e]}).join("&")})))}}]),a}(r.a.Component),pe=_(Object(m.withStyles)(function(e){return{title:{marginBottom:32},underline:{textDecoration:"underline"},required:{color:"red"}}})(de)),ye=function(e){function a(){return Object(s.a)(this,a),Object(c.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(w.a,{position:"sticky",color:"primary"},r.a.createElement(L.a,null,r.a.createElement(C.a,{variant:"h6",color:"inherit",className:e.name},"Kokanee & Inland Chinook Angler Survey"))),r.a.createElement("div",{style:{paddingTop:20}},r.a.createElement(b.a,{container:!0},r.a.createElement(b.a,{item:!0,md:3,sm:2}),r.a.createElement(b.a,{item:!0,md:6,sm:8,xs:12},r.a.createElement(v.a,{className:e.paper},r.a.createElement(pe,null)),r.a.createElement("div",{className:e.footer},r.a.createElement(C.a,{variant:"body2",color:"inherit"},"Developed and paid for by members and sponsors of ",r.a.createElement("a",{href:"http://kokanee.org"},"Project Kokanee")," & ",r.a.createElement("a",{href:"http://kokaneepower.org"},"Kokanee Power")),r.a.createElement(C.a,{variant:"caption",color:"inherit"},"Form was created by ",r.a.createElement("a",{href:"mailto:hello@austinerck.com"},"Austin Erck")))))))}}]),a}(r.a.Component),ke=_(Object(m.withStyles)(function(e){return{root:{flexGrow:1},logo:{height:40},name:{marginLeft:8},grid:{paddingTop:24},paper:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,padding:3*e.spacing.unit,color:e.palette.text.secondary},footer:{marginTop:16,marginBottom:32,textAlign:"center"}}})(ye));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[136,2,1]]]);
//# sourceMappingURL=main.83e092ac.chunk.js.map