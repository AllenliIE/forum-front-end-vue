"use strict";(self["webpackChunkforum_front_end_vue"]=self["webpackChunkforum_front_end_vue"]||[]).push([[885],{4885:function(t,s,r){r.r(s),r.d(s,{default:function(){return H}});var e=function(){var t=this,s=t._self._c;return s("main",{attrs:{role:"main"}},[s("div",{staticClass:"album py-5 bg-light"},[s("div",{staticClass:"container"},[s("UserProfileCard",{attrs:{user:t.user,isCurrentUser:t.currentUser.id===t.user.id,"initial-is-followed":t.isFollowed}}),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-4"},[s("UserFollowingsCard",{attrs:{followings:t.followings}}),s("br"),s("UserFollowersCard",{attrs:{followers:t.followers}})],1),s("div",{staticClass:"col-md-8"},[s("UserCommentsCard",{attrs:{comments:t.comments}}),s("br"),s("UserFavoritedRestaurantsCard",{attrs:{favRestaurants:t.favRestaurants}})],1)])],1)])])},a=[],i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"row no-gutters"},[s("div",{staticClass:"col-md-4"},[s("img",{attrs:{src:t._f("emptyImage")(t.user.image),width:"300px",height:"300px"}})]),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card-body"},[s("h5",{staticClass:"card-title"},[t._v(t._s(t.user.name))]),s("p",{staticClass:"card-text"},[t._v(" "+t._s(t.user.email)+" ")]),s("ul",{staticClass:"list-unstyled list-inline"},[s("li",[s("strong",[t._v(t._s(t.user.commentsLength))]),t._v(" 已評論餐廳 ")]),s("li",[s("strong",[t._v(t._s(t.user.favRestaurantsLength))]),t._v(" 收藏的餐廳 ")]),s("li",[s("strong",[t._v(t._s(t.user.followingsLength))]),t._v(" followings (追蹤者) ")]),s("li",[s("strong",[t._v(t._s(t.user.followersLength))]),t._v(" followers (追隨者) ")])]),s("p",[t.isCurrentUser?[s("router-link",{attrs:{to:{name:"user-edit",params:{id:t.user.id}}}},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("edit")])])]:[t.isFollowed?s("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.unfollow(t.user.id)}}},[t._v(" 取消追蹤 ")]):s("button",{staticClass:"btn btn-primary",on:{click:function(s){return s.preventDefault(),s.stopPropagation(),t.follow(t.user.id)}}},[t._v(" 追蹤 ")])]],2)])])])])},l=[],o=r(5143),n=r(7213),d=r(4145),u={name:"UserProfileCard",mixins:[d.L],props:{user:{type:Object,required:!0},isCurrentUser:{type:Boolean,required:!0},initialIsFollowed:{type:Boolean,required:!0}},data(){return{isFollowed:this.initialIsFollowed}},watch:{initialIsFollowed(t){this.isFollowed={...this.isFollowed,...t}}},methods:{async follow(t){try{const{data:s,status:r,statusText:e}=await o.Z.following({userId:t});if("error"===r)throw new Error(e);this.isFollowed=!0}catch(s){n.F.fire({icon:"error",title:""})}},async unfollow(t){try{const{data:s,status:r,statusText:e}=await o.Z.unfollowing({userId:t});if("error"===r)throw new Error(e);this.isFollowed=!1}catch(s){n.F.fire({icon:"error",title:""})}}}},c=u,m=r(3736),f=(0,m.Z)(c,i,l,!1,null,null,null),h=f.exports,g=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card mb-3"},[s("div",{staticClass:"card-header"},[s("strong",[t._v(t._s(t.followings.length))]),t._v(" Followings (追蹤者) ")]),s("div",{staticClass:"card-body"},t._l(t.followings,(function(r){return s("router-link",{key:r.id,attrs:{to:{name:"user",params:{id:r.id}}}},[s("img",{staticClass:"avatar mr-1 mb-1",attrs:{src:t._f("emptyImage")(r.image),width:"60",height:"60"}})])})),1)])},v=[],w={name:"UserFollowingsCard",mixins:[d.L],props:{followings:{type:Array,default:()=>[]}}},_=w,p=(0,m.Z)(_,g,v,!1,null,null,null),C=p.exports,y=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("strong",[t._v(t._s(t.followers.length))]),t._v(" Followers (追隨者) ")]),s("div",{staticClass:"card-body"},t._l(t.followers,(function(r){return s("router-link",{key:r.id,attrs:{to:{name:"user",params:{id:r.id}}}},[s("img",{staticClass:"avatar mr-1 mb-1",attrs:{src:t._f("emptyImage")(r.image),width:"60",height:"60"}})])})),1)])},b=[],F={name:"UserFollowersCard",mixins:[d.L],props:{followers:{type:Array,default:()=>[]}}},U=F,x=(0,m.Z)(U,y,b,!1,null,null,null),L=x.exports,R=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("strong",[t._v(t._s(t.comments.length))]),t._v(" 已評論餐廳 ")]),s("div",{staticClass:"card-body"},t._l(t.comments,(function(r){return s("router-link",{key:r.id,attrs:{to:{name:"restaurant",params:{id:r.RestaurantId}}}},[s("img",{staticClass:"avatar mr-1 mb-1",attrs:{src:t._f("emptyImage")(r.Restaurant.image),width:"60",height:"60"}})])})),1)])},k=[],I={name:"UserCommentsCard",mixins:[d.L],props:{comments:{type:Array,default:()=>[]}}},Z=I,P=(0,m.Z)(Z,R,k,!1,null,null,null),A=P.exports,q=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("strong",[t._v(t._s(t.favRestaurants.length))]),t._v(" 收藏的餐廳 ")]),s("div",{staticClass:"card-body"},t._l(t.favRestaurants,(function(r){return s("router-link",{key:r.id,attrs:{to:{name:"restaurant",params:{id:r.id}}}},[s("img",{staticClass:"avatar mr-1 mb-1",attrs:{src:t._f("emptyImage")(r.image),width:"60",height:"60"}})])})),1)])},E=[],T={name:"UserFavoritedRestaurantsCard",mixins:[d.L],props:{favRestaurants:{type:Array,default:()=>[]}}},B=T,D=(0,m.Z)(B,q,E,!1,null,null,null),j=D.exports,O=r(629),$={name:"User",components:{UserProfileCard:h,UserFollowingsCard:C,UserFollowersCard:L,UserCommentsCard:A,UserFavoritedRestaurantsCard:j},data(){return{user:{id:null,name:"",email:"",image:"",commentsLength:0,favRestaurantsLength:0,followingsLength:0,followersLength:0},comments:[],favRestaurants:[],followings:[],followers:[],isFollowed:!1}},computed:{...(0,O.rn)(["currentUser"])},beforeRouteUpdate(t,s,r){const{id:e}=t.params;this.fetchUser(e),r()},created(){const{id:t}=this.$route.params;this.fetchUser(t)},methods:{async fetchUser(t){try{const{data:s,status:r,statusText:e}=await o.Z.get({userId:t});if("error"===r)throw new Error(e);const{profile:a,isFollowed:i}=s,{id:l,name:n,email:d,image:u,Comments:c,FavoritedRestaurants:m,Followings:f,Followers:h}=a;this.user={...this.user,id:l,name:n,email:d,image:u,commentsLength:c.length,favRestaurantsLength:m.length,followingsLength:f.length,followersLength:h.length},this.comments=c,this.favRestaurants=m,this.followings=f,this.followers=h,this.isFollowed=i}catch(s){n.F.fire({icon:"error",title:"無法取得使用者資料，請稍後再試"})}}}},z=$,G=(0,m.Z)(z,e,a,!1,null,null,null),H=G.exports}}]);
//# sourceMappingURL=885.0c38a0f2.js.map