(this.webpackJsonppokebattle=this.webpackJsonppokebattle||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(2),l=a.n(s),r=(a(12),a(3)),i=a(4),c=a(6),m=a(5),u=(a(13),a(14),function(e){var t=e.name,a=e.id,n=e.height,s=e.weight;return o.a.createElement("div",{className:"dib br3 pa3 ma2 grow bw2 shadow-5 tc",id:"card"},o.a.createElement("img",{alt:"pokemon",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(a,".png")}),o.a.createElement("div",null,o.a.createElement("h3",null,t.charAt(0).toUpperCase()+t.slice(1)),o.a.createElement("h3",null,"ID: ",a),o.a.createElement("h3",null,"Height: ",n),o.a.createElement("h3",null,"Weight: ",s)))}),p=function(e){var t=e.pokemonlist;return o.a.createElement(n.Fragment,null,t.map((function(e,a){return o.a.createElement(u,{key:a,name:t[a].name,id:t[a].id,height:t[a].height,weight:t[a].weight})})))},h=(a(15),function(e){var t=e.pokemonlist,a=function(e,a){var n=0;return a.forEach((function(a,o){var s=t[o].stats;s.forEach((function(t,a){s[a].stat.name===e&&(n+=s[a].base_stat)}))})),n},n=a("speed",t),s=a("special-defense",t),l=a("special-attack",t),r=a("defense",t),i=a("attack",t),c=a("hp",t);return o.a.createElement("div",{className:"dib br3 pa2 ma2",id:"stat"},o.a.createElement("div",null,o.a.createElement("h2",{id:"headerstats"},"Team Stats"),o.a.createElement("h3",null,"Speed: ",n),o.a.createElement("h3",null,"Special Defense: ",s," "),o.a.createElement("h3",null,"Special Attack: ",l),o.a.createElement("h3",null,"Defense: ",r),o.a.createElement("h3",null,"Attack: ",i),o.a.createElement("h3",null,"HP: ",c)))}),k=function(){for(var e=[],t=0;t<6;t++){var a=Math.floor(807*Math.random())+1;e.push(a)}return e},f=function(e){var t=[];return e.forEach((function(e){var a="https://pokeapi.co/api/v2/pokemon/".concat(e,"/");return t.push(a),t})),t},E=function(e,t){var a=0;return t.forEach((function(n,o){var s=t[o].stats;s.forEach((function(t,n){s[n].stat.name===e&&(a+=s[n].base_stat)}))})),a},y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).onRefreshButtonClick=function(){var t=k(),a=f(t);Promise.all(a.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){return e.setState({pokemonlistPlayer:t})}));var n=E("speed",e.state.pokemonlistPlayer)+E("special-defense",e.state.pokemonlistPlayer)+E("special-attack",e.state.pokemonlistPlayer)+E("defense",e.state.pokemonlistPlayer)+E("attack",e.state.pokemonlistPlayer)+E("hp",e.state.pokemonlistPlayer);e.setState({totalPlayerPower:n}),e.setState({score:0}),e.setState({gameStatus:"Use Your New Pokemon To Fight!"})},e.onBattleButtonClick=function(){var t=e.state.score;if(e.state.totalPlayerPower>e.state.totalEnemyPower){e.setState({score:Number(t)+1});var a=k(),n=f(a);Promise.all(n.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){return e.setState({pokemonlistEnemy:t})}));var o=E("speed",e.state.pokemonlistEnemy)+E("special-defense",e.state.pokemonlistEnemy)+E("special-attack",e.state.pokemonlistEnemy)+E("defense",e.state.pokemonlistEnemy)+E("attack",e.state.pokemonlistEnemy)+E("hp",e.state.pokemonlistEnemy);e.setState({totalEnemyPower:o}),e.setState({gameStatus:"YOU WON. Click Battle To Fight Again!"})}else{e.setState({score:0});var s=k(),l=f(s);Promise.all(l.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){return e.setState({pokemonlistPlayer:t})}));var r=k(),i=f(r);Promise.all(i.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){return e.setState({pokemonlistEnemy:t})}));var c=E("speed",e.state.pokemonlistPlayer)+E("special-defense",e.state.pokemonlistPlayer)+E("special-attack",e.state.pokemonlistPlayer)+E("defense",e.state.pokemonlistPlayer)+E("attack",e.state.pokemonlistPlayer)+E("hp",e.state.pokemonlistPlayer);e.setState({totalPlayerPower:c});var m=E("speed",e.state.pokemonlistEnemy)+E("special-defense",e.state.pokemonlistEnemy)+E("special-attack",e.state.pokemonlistEnemy)+E("defense",e.state.pokemonlistEnemy)+E("attack",e.state.pokemonlistEnemy)+E("hp",e.state.pokemonlistEnemy);e.setState({totalEnemyPower:m}),e.setState({gameStatus:"YOU LOST. Click Battle for Revenge!"})}},e.state={pokemonlistPlayer:[],pokemonlistEnemy:[],totalPlayerPower:0,totalEnemyPower:0,score:0,gameStatus:"Click Battle To Fight!"},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=k(),a=f(t);Promise.all(a.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){return e.setState({pokemonlistPlayer:t})}));var n=k(),o=f(n);Promise.all(o.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){return e.setState({pokemonlistEnemy:t})}));var s=E("speed",this.state.pokemonlistPlayer)+E("special-defense",this.state.pokemonlistPlayer)+E("special-attack",this.state.pokemonlistPlayer)+E("defense",this.state.pokemonlistPlayer)+E("attack",this.state.pokemonlistPlayer)+E("hp",this.state.pokemonlistPlayer);this.setState({totalPlayerPower:s});var l=E("speed",this.state.pokemonlistEnemy)+E("special-defense",this.state.pokemonlistEnemy)+E("special-attack",this.state.pokemonlistEnemy)+E("defense",this.state.pokemonlistEnemy)+E("attack",this.state.pokemonlistEnemy)+E("hp",this.state.pokemonlistEnemy);this.setState({totalEnemyPower:l})}},{key:"render",value:function(){var e=this.state.pokemonlistPlayer,t=this.state.score,a=this.state.pokemonlistEnemy;return 0===e&&0===a?o.a.createElement("h4",null,"Loading"):o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"Pokebattle v1.0"),o.a.createElement("h1",{className:"push"},this.state.gameStatus),o.a.createElement("button",{onClick:this.onRefreshButtonClick,className:"pushsmall"},"Get New Pokemons"),o.a.createElement("button",{onClick:this.onBattleButtonClick,className:"pushsmall"},"Battle"),o.a.createElement("h2",{className:"pushsmall score"},"Current Score: ",t)),o.a.createElement("div",{className:"game"},o.a.createElement("h2",null,"Your Team"),o.a.createElement(p,{pokemonlist:e}),o.a.createElement(h,{pokemonlist:e}),o.a.createElement("h2",null,"Red's Team"),o.a.createElement(p,{pokemonlist:a}),o.a.createElement(h,{pokemonlist:a})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(16);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.d7c2d3f9.chunk.js.map