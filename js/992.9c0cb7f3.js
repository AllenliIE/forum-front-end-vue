"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[992],{7992:function(t,a,e){e.r(a),e.d(a,{default:function(){return m}});var n=function(){var t=this,a=t._self._c;return a("div",{staticClass:"container py-5"},[t.isLoading?a("Spinner"):[a("div",[a("h1",[t._v(t._s(t.restaurant.name))]),a("span",{staticClass:"badge badge-secondary mt-1 mb-3"},[t._v(" "+t._s(t.restaurant.categoryName)+" ")])]),a("hr"),a("ul",[a("li",[t._v("評論數： "+t._s(t.restaurant.commentsLength))]),a("li",[t._v("瀏覽次數： "+t._s(t.restaurant.viewCounts))])]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return t.$router.back()}}},[t._v(" 回上一頁 ")])]],2)},s=[],r=e(6233),i=e(6646),o=e(7213),u={name:"RestaurantDashboard",components:{Spinner:r.Z},data(){return{restaurant:{id:-1,name:"",categoryName:"",commentsLength:0,viewCounts:0},isLoading:!0}},beforeRouteUpdate(t,a,e){const{id:n}=t.params;this.fetchRestaurant(n),e()},created(){const{id:t}=this.$route.params;this.fetchRestaurant(t)},methods:{async fetchRestaurant(t){try{this.isLoading=!0;const{data:a,status:e,statusText:n}=await i.Z.getDashboard({restaurantId:t});if("error"===e)throw new Error(n);const{id:s,name:r,Category:o,Comments:u,viewCounts:c}=a.restaurant;this.restaurant={id:s,name:r,categoryName:o?o.name:"未分類",commentsLength:u.length,viewCounts:c},this.isLoading=!1}catch(a){this.isLoading=!1,o.F.fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"})}}}},c=u,d=e(3736),h=(0,d.Z)(c,n,s,!1,null,null,null),m=h.exports}}]);
//# sourceMappingURL=992.9c0cb7f3.js.map