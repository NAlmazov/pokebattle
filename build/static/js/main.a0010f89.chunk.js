(this.webpackJsonppokebattle=this.webpackJsonppokebattle||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),l=n.n(o),s=(n(12),n(3)),i=n(4),c=n(6),u=n(5),m=(n(13),n(14),function(e){var t=e.name,n=e.id,a=e.height,o=e.weight;return r.a.createElement("div",{className:"dib br3 pa3 ma2 grow bw2 shadow-5 tc",id:"card"},r.a.createElement("img",{alt:"pokemon",src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png")}),r.a.createElement("div",null,r.a.createElement("h3",null,t.charAt(0).toUpperCase()+t.slice(1)),r.a.createElement("h3",null,"ID: ",n),r.a.createElement("h3",null,"Height: ",a),r.a.createElement("h3",null,"Weight: ",o)))}),h=function(e){var t=e.pokemonlist;return r.a.createElement(a.Fragment,null,t.map((function(e,n){return r.a.createElement(m,{key:n,name:t[n].name,id:t[n].id,height:t[n].height,weight:t[n].weight})})))},p=(n(15),function(e){var t=e.pokemonlist,n=function(e,n){var a=0;return n.forEach((function(n,r){var o=t[r].stats;o.forEach((function(t,n){o[n].stat.name===e&&(a+=o[n].base_stat)}))})),a},a=n("speed",t),o=n("special-defense",t),l=n("special-attack",t),s=n("defense",t),i=n("attack",t),c=n("hp",t);return r.a.createElement("div",{className:"dib br3 pa2 ma2",id:"stat"},r.a.createElement("div",null,r.a.createElement("h2",{id:"headerstats"},"Team Stats"),r.a.createElement("h3",null,"Speed: ",a),r.a.createElement("h3",null,"Special Defense: ",o," "),r.a.createElement("h3",null,"Special Attack: ",l),r.a.createElement("h3",null,"Defense: ",s),r.a.createElement("h3",null,"Attack: ",i),r.a.createElement("h3",null,"HP: ",c)))}),f=function(e){for(var t=[],n=0;n<e;n++){var a=Math.floor(807*Math.random())+1;t.push(a)}return t},k=function(e){var t=[];return e.forEach((function(e){var n="https://pokeapi.co/api/v2/pokemon/".concat(e,"/");return t.push(n),t})),t},d=function(e,t){var n=0;return t.forEach((function(a,r){var o=t[r].stats;o.forEach((function(t,a){o[a].stat.name===e&&(n+=o[a].base_stat)}))})),n},E=function(e){return d("speed",e)+d("special-defense",e)+d("special-attack",e)+d("defense",e)+d("attack",e)+d("hp",e)},g=0,v=0,S=[],P=[],b=function(e){Object(c.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onRefreshButtonClick=function(){var t=f(6),n=k(t);Promise.all(n.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){return e.setState({pokemonlistPlayer:t})})),e.setState({score:0}),e.setState({gameStatus:"Use Your New Pokemon To Fight!"})},e.onBattleButtonClick=function(){P=e.state.pokemonlistPlayer,g=E(e.state.pokemonlistPlayer),S=e.state.pokemonlistEnemy,v=E(e.state.pokemonlistEnemy);var t=e.state.score;if(g>=v)if(e.setState({score:Number(t)+1}),"battle"===e.state.turnStatus){e.setState({turnStatus:"configteam"}),e.setState({gameStatus:"You WON! Pick a Pok\xe9mon to steal"});var n=Number(window.prompt("Type Pokemon ID to steal!")),a=Number(window.prompt("Type Pokemon ID to discard!"));n&&a?(P=function(e,t,n,a){for(var r=-1,o=-1,l=[],s=[],i=0;i<e.length;i++)l.push(e[i].id);for(var c=0;c<n.length;c++)s.push(n[c].id);if(-1===l.indexOf(t)||-1===s.indexOf(a))return e;for(var u=0;u<n.length;u++)if(Number(n[u].id)===a){r=u;break}for(var m=0;m<e.length;m++)if(e[m].id===t){o=m;break}var h=n[r],p=e;p.splice(o,1,h);return p}(P,a,S,n),e.setState({pokemonlistPlayer:P}),e.setState({turnStatus:"battle"}),e.setState({gameStatus:"Click Battle to Fight Again!"})):(e.setState({turnStatus:"battle"}),e.setState({gameStatus:"Click Battle to Fight Again!"}))}else e.setState({gameStatus:"Pick a Pok\xe9mon to steal"});else{e.setState({score:0});var r=f(e.state.pokemonlistPlayer.length),o=k(r);Promise.all(o.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){return e.setState({pokemonlistPlayer:t})})),e.setState({gameStatus:"YOU LOST. Click Battle for Revenge!"})}var l=f(e.state.pokemonlistEnemy.length),s=k(l);Promise.all(s.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){return e.setState({pokemonlistEnemy:t})}))},e.state={pokemonlistPlayer:[],pokemonlistEnemy:[],score:0,gameStatus:"Click Battle To Fight!",turnStatus:"battle"},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=f(6),n=k(t);Promise.all(n.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){return e.setState({pokemonlistPlayer:t})}));var a=f(6),r=k(a);Promise.all(r.map((function(e){return fetch(e)}))).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(t){return e.setState({pokemonlistEnemy:t})}))}},{key:"render",value:function(){var e=this.state.pokemonlistPlayer,t=this.state.score,n=this.state.pokemonlistEnemy;return 0===e&&0===n?r.a.createElement("h4",null,"Loading"):r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Pok\xe9battle v1.0"),r.a.createElement("h1",{className:"push"},this.state.gameStatus),r.a.createElement("button",{onClick:this.onRefreshButtonClick,className:"pushsmall"},"Get New Pok\xe9mon"),r.a.createElement("button",{onClick:this.onBattleButtonClick,className:"pushsmall"},"Battle"),r.a.createElement("h2",{className:"pushsmall score"},"Current Score: ",t)),r.a.createElement("div",{className:"game"},r.a.createElement("h2",null,"Your Team"),r.a.createElement(h,{pokemonlist:e}),r.a.createElement(p,{pokemonlist:e}),r.a.createElement("h2",null,"Red's Team"),r.a.createElement(h,{pokemonlist:n}),r.a.createElement(p,{pokemonlist:n})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(16);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.a0010f89.chunk.js.map