(this.webpackJsonptic_tac_toe=this.webpackJsonptic_tac_toe||[]).push([[0],{13:function(e,n,r){},14:function(e,n,r){},15:function(e,n,r){"use strict";r.r(n);var t,a=r(0),o=r.n(a),c=r(2),i=r.n(c),l=(r(13),r(3)),s=r(4),u=r(6),d=r(5),f=r(7),m=(r(14),-1);!function(e){e[e.None=0]="None",e[e.One=1]="One",e[e.Two=2]="Two"}(t||(t={}));var N=function(e){function n(){var e,r;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(r=Object(u.a)(this,(e=Object(d.a)(n)).call.apply(e,[this].concat(c)))).state={board:[t.None,t.None,t.None,t.None,t.None,t.None,t.None,t.None,t.None],nextPlayerTurn:t.One,gameIsWon:m},r.checkIfGameIsOver=function(e){if(e[0]===e[1]&&e[1]===e[2]&&e[2]!==t.None)return e[0];if(e[3]===e[4]&&e[4]===e[5]&&e[5]!==t.None)return e[3];if(e[6]===e[7]&&e[7]===e[8]&&e[8]!==t.None)return e[6];if(e[0]===e[3]&&e[3]===e[6]&&e[6]!==t.None)return e[0];if(e[1]===e[4]&&e[4]===e[7]&&e[7]!==t.None)return e[1];if(e[2]===e[5]&&e[5]===e[8]&&e[8]!==t.None)return e[2];if(e[0]===e[4]&&e[4]===e[8]&&e[8]!==t.None)return e[0];if(e[2]===e[4]&&e[4]===e[6]&&e[6]!==t.None)return e[2];for(var n=0;n<e.length;n++)if(e[n]===t.None)return m;return t.None},r.createOnClickHandler=function(e){return function(){var n=r.state,a=n.board,o=n.nextPlayerTurn;if(n.gameIsWon===m&&a[e]===t.None){var c=a.slice();c[e]=o;var i=r.checkIfGameIsOver(c);r.setState({board:c,nextPlayerTurn:3-o,gameIsWon:i})}}},r.renderStatus=function(){var e=r.state.gameIsWon,n=e!==t.None?"Player ".concat(e," won"):"The game is a draw!";return o.a.createElement("div",{style:{margin:"25px"}},"Player 1 is green, Player 2 is red"," ",o.a.createElement("br",null),e===m?"Game is onging":n)},r.renderCell=function(e){var n=r.state.board;return o.a.createElement("div",{className:"cell",onClick:r.createOnClickHandler(e),"data-player":n[e]})},r.renderBoard=function(){var e=r.state.board;return o.a.createElement("div",{className:"board-container"},e.map((function(e,n){return r.renderCell(n)})))},r}return Object(f.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",null,"Tic Tac Toe by cnohall"),this.renderBoard(),this.renderStatus()))}}]),n}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,n,r){e.exports=r(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.c339bb76.chunk.js.map