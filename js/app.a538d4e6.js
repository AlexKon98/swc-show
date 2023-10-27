(function(){"use strict";var a={2266:function(a,t,e){var n=e(9242),o=e(3396);const s={class:"main-bg"};function l(a,t,e,n,l,c){const d=(0,o.up)("Header"),r=(0,o.up)("router-view"),i=(0,o.up)("GraphBlock"),A=(0,o.up)("MobMenu"),u=(0,o.up)("Dialog");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(d,{onOpenDialog:c.showDialog,onChangeShow:c.changeShowHead,show:l.show},null,8,["onOpenDialog","onChangeShow","show"]),(0,o.Wm)(r),(0,o._)("div",s,[(0,o.Wm)(i)]),l.show?((0,o.wg)(),(0,o.j4)(A,{key:0,onChangeShow:c.changeShow,show:l.show,ref:"mob"},null,8,["onChangeShow","show"])):(0,o.kq)("",!0),l.open?((0,o.wg)(),(0,o.j4)(u,{key:1,open:l.open,onChangeView:c.showDialog,onCloseDialog:c.showDialog},null,8,["open","onChangeView","onCloseDialog"])):(0,o.kq)("",!0)])}var c=e(7139),d=e.p+"img/logo.4907c987.svg";const r=a=>((0,o.dD)("data-v-1cd2a65c"),a=a(),(0,o.Cn)(),a),i={class:"header"},A={class:"container"},u=r((()=>(0,o._)("img",{src:d,alt:""},null,-1))),g={class:"header__nav"},v={class:"header__list"},f={class:"header__item"},m={class:"header__item"},h={class:"header__item"},p={class:"header__item"},w={class:"header__item"},W={class:"header__item"},B={class:"header__contacts"},b=r((()=>(0,o._)("a",{class:"header__tel",href:"tel:+74951234567"}," +7 (495) 123-45-67 ",-1))),C=r((()=>(0,o._)("div",{class:"top"},null,-1))),I=r((()=>(0,o._)("div",{class:"mid"},null,-1))),y=r((()=>(0,o._)("div",{class:"bottom"},null,-1))),S=[C,I,y];function E(a,t,e,n,s,l){const d=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("header",i,[(0,o._)("div",A,[(0,o.Wm)(d,{class:"header__logo",to:"/"},{default:(0,o.w5)((()=>[u])),_:1}),(0,o._)("nav",g,[(0,o._)("ul",v,[(0,o._)("li",f,[(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Преимущества")])),_:1})]),(0,o._)("li",m,[(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Услуги")])),_:1})]),(0,o._)("li",h,[(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Виджет")])),_:1})]),(0,o._)("li",p,[(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Кому")])),_:1})]),(0,o._)("li",w,[(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Тарифы")])),_:1})]),(0,o._)("li",W,[(0,o.Wm)(d,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Блог")])),_:1})])])]),(0,o.Wm)(d,{class:"header__change-lang",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("En")])),_:1}),(0,o._)("div",B,[b,(0,o._)("button",{onClick:t[0]||(t[0]=(...a)=>l.openDialog&&l.openDialog(...a)),class:"header__open-popup blue-btn"}," Контакты ")]),(0,o._)("button",{onClick:t[1]||(t[1]=(...a)=>l.changeShow&&l.changeShow(...a)),class:(0,c.C_)(["header__menu",{active:e.show}])},S,2)])])}var D={name:"Header",props:{show:{type:Boolean}},methods:{changeShow(){this.$emit("changeShow",!this.show)},openDialog(){this.$emit("openDialog",!0)}}},k=e(89);const M=(0,k.Z)(D,[["render",E],["__scopeId","data-v-1cd2a65c"]]);var X=M,Z=e.p+"img/phone.9b56a1c6.svg";const P=a=>((0,o.dD)("data-v-8edb07c6"),a=a(),(0,o.Cn)(),a),G={class:"mob-menu",ref:"menu"},J=P((()=>(0,o._)("div",{class:"top"},null,-1))),x=P((()=>(0,o._)("div",{class:"bottom"},null,-1))),Q=[J,x],U={class:"mob-menu__list"},V={class:"mob-menu__item"},O={class:"mob-menu__item"},j={class:"mob-menu__item"},L={class:"mob-menu__item"},Y={class:"mob-menu__item"},F={class:"mob-menu__item"},N=P((()=>(0,o._)("a",{class:"mob-menu__tel",href:"tel:+74951234567"},[(0,o._)("img",{src:Z,alt:""})],-1)));function H(a,t,e,n,s,l){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",G,[(0,o._)("button",{onClick:t[0]||(t[0]=(...a)=>l.changeShow&&l.changeShow(...a)),class:"mob-menu__close"},Q),(0,o._)("ul",U,[(0,o._)("li",V,[(0,o.Wm)(c,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Преимущества")])),_:1})]),(0,o._)("li",O,[(0,o.Wm)(c,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Услуги")])),_:1})]),(0,o._)("li",j,[(0,o.Wm)(c,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Виджет")])),_:1})]),(0,o._)("li",L,[(0,o.Wm)(c,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Кому")])),_:1})]),(0,o._)("li",Y,[(0,o.Wm)(c,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Тарифы")])),_:1})]),(0,o._)("li",F,[(0,o.Wm)(c,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Блог")])),_:1})])]),(0,o.Wm)(c,{class:"mob-menu__change-lang",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("En")])),_:1}),N],512)}var z={name:"MobMenu",props:{show:{type:Boolean}},methods:{changeShow(){this.$refs.menu.style.transform="translate(-100%)",setTimeout((()=>{this.$emit("changeShow",!1)}),300)}},mounted(){setTimeout((()=>{this.$refs.menu.style.transform="translate(0)"}),100)}};const K=(0,k.Z)(z,[["render",H],["__scopeId","data-v-8edb07c6"]]);var q=K,R=e.p+"img/categories.f6503ad1.png",T=e.p+"img/analitics.14b3f5e9.png",_="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAAENCAYAAADt8sv/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABcJSURBVHgB7d37j1znXcfx75n7Ze/rvcWLs3bjJE4bnAuV2kaopQIJIaFEAoSEVKASquCXqv0Lkv7Ar7TwU5EQNAKEhESbVhW/IGgoVQsttHbaJqlz8Tqxvetd733nfuP7PbPbOj679m7mmT1nZt4v6+nZTMc769l5Pue5nPM8nhxDq9XK6OHDWp7VclHLnJYZLaNakgKgpmVHy4qW61oua/m6lv/2PK8mPcI7ypM0EH5ZD3+m5be1nBYAx3VDyze0fFkD4hWJuHsGgwbCKT18RstntUzLEYMEwIFa0m5J/KWWv9aAWJeIOrCiayDY409o+XMtv6ElIQBcKWv5ppYvavmeBkRLIiYQDBoKMT38upYvabkgALrlDS1/quVlDYemRMhBwfCUHr6lZUQAdNumlk9qMPxIIiR2539oKJzXwz8KoQCclDEt/7BX9yLj58GgP5gNLv6FlkcFwEl6TMsXtA5OSET4wbA32Pj7Wn5LAIThd7X8wV5dDN1+i+Gclk/LXV0LACfGLhC0gcizEgH7QfApaV/JCCA8Ngv4hxIBMW26ZPX4nNBaAMJmdfC5vToZ+g/yjJZIjYgCA8xuOXhGQmbB8HEtaQEQBeMSkWB4WktcAESB1cUPS8gsGB4WAFESep20YDglAKJkSkJmd006GwGt1epSLFWlUW9ILpeRTIa1W4D3ISch83RqxMktn3UNgx+9sihlDYZ4PCblSk0+8uHzGhCMawLH5SkJkbN1FnZ3y5LPpuXihx6URCImP/7pu7Jye1sWzkxJuVyVldVtPzympkZleCgjjUZTlpY3pNH8xd2mY6N5GRnOyo2b6zIxPiS313b0e8VlbnbM3ii7dFt2dkqytr7rt0am9XtZCNnj2/7jO5JJJ2Vmesx/3P5+OpWU4eHMz19j+damvk5O/35KABzM2UVNY2N5ufDoaalWa34gFEsVmZwY9sPg9Ss3ZGOzIBVtRfzP96/4QVHTx199/YaUilWplGty7dptubWyKdZ++cmr78pPX7suu4WyXHnjpl+s8t9a2Wq3SvT7LF5b1ee8K81mS1b08f/94VtSqdb9xy/pc+z5716/7YfFna4u3tIQKQuAwzldmclaAW8vrvhn76yekVPJhH/mfvSRealppW1qZV3SM3apVJNsrn3GfugDs36rwIJiX1NbEb80PymzM2N+uFiwLDw445/tp0+NyIVHTvstBwsAO9r3fGBuQi48bMFUl/WNX4TBO9dXteWwLRMTQ3JmnnFW4CicBYNV5ljMk8cenfcr51tXb2lZlnML0/LGW8v+2d+6GtaCuP+whqfN//aYqHU7ajX9O/rHvq9VcJPPZ/zWgg142jGXbQdNMhn3uxL7JsdHZGZmRN7Wn8cCCMD9OetKLC1v+l0DGwvIaiW1Qce6VujNrYKGQkWevHjW72ocZazTnrO21j7rr2q3xFofFjr2Pbe2iv7j29tFSWgI2FhBOp2Qde2q+I9rC8K6IhYWJp9P63jFsLZektqVqQuA+3PWYpjSJv6NpXX5z++8KvFYzO82/MpT5ySpZ+l4fE3HFt7wAyOdvv8UpnU/bIBx8Z0Vv5Vw8fEFv1ty9sEpv9J/W1/Dui3nH5qTIW1RLJyZlss/WdTHX5N6oyHnzs7438O8rWMK9n0sQB6em5Pbt7cEwL05m6401qy38QObabCz/P51DFaJSzrgmE4l/DN5Uiu5tQDKOuhoQWETM/Yc+3uJeFz+7T8uy68+c2FvQUrP/z77szf1etMfvIzrzEcm/YvHa/W6P4gZ01BK6/MtnCxU6vp97Rn2fAsXGwDdf30gqvpmutJYhbNyNzt7D+UzgcfvvADKnrM/9TgykvMr8UFjAjYVaq2EwGsn9LWH3vvaKQ2iuyclj9JiAQad0xaDK9bysFAIOTSB0ITdYohkMACDLuxgYNUmAAEEA4AAggFAAMEAIIBgABBAMAAIIBgABBAMAAIIBgABBAOAAIIBQADBACCAYAAQQDAACCAYAAQQDAACCAYAAQQDgACCAUAAwQAggGAAEEAwAAggGAAEEAwAApxuUXc/jVZL6s2GHu2/jr/PTTzmScKLS5wdqoCu6mow2CZX5WZdNqsVWS4XZKtelmqz6e+EfVz+xrSxmKS0jCYycjo3JGPJjAYFjR7Ata5tUWc7V18prMs7xW0p1GvSDePJtDw8PClzmSGJ0YpAH+nLvSt36lW5tHlLVitF6TZ7/+azw3JxdFpbE3EB+kHfBcNapSSXt27JZq0iJ+lUKicfmzwtiRhdC/S+vtrUtmbdh92NEw8Fc7talNd2bku91RQAnXEaDIvFTVmp7EpY3i5syVYIoQT0G2ezEhWdfbiqFbPRnbHMI2loa+G1nTX56MQDOqXpLvOa2hLa3i1LpVKVVoj/PkSTtfozmZQM5zMS65OurLNguF7alUKjO7MPx2FjHFs6+DmhU5mdqtUb8s6NVfnB5TelXAn/34Zoy6ST8rGnH5b5B6Z6fpbMWbytlHcjcTa1VsNKuSCdsn/LW9eW5Xs//BmhgCOxz8l/ff91ubm8Lr3OWTBEqW+/Vi1Jp8rabXjz6pLU6wxm4uislXnp1UWp1urSy5wFQ7kRnTei0mhIpza2CrJTLAtwXDu7JSmVqtLLnASDdSCidF6ttToPhkq1LvVa598Hg6euJ6ZKtbe7n06CIWrDLC6GOkbyWUnrYBJwXFmdobDSy7hM8BCjIzmZnRoT4LjmpsYll01LLyMYDpFIxOXiYwsyo+HADVo4CvucTE+OylOPn5N4vLer1omux9BrRodz8slnHpcbS2uycntLSuWKcH0T7mYXOFkLYWpyRBbmp/riIieC4T7SyYScOzPjF2BQ0JUAEEAwAAigK3FE/nJ0gzy+4AmDsF1ml+HbhVG1Wl1urWxe1YcWpDsW9fd5yfNiL02fGnnxoCc4W6jlqzd+JlGRiyflN2fPiQuNZku2C3UpVhpSbwxuMthCvLl0TEbySUnECQjX7IKo7e1SGPcbLXqx2At3BwQthnuoVJuytF6WUoX7JcxOUWR9tybzp7KSSdELdeXOS6hTOtidSiWkWm0tjI9nr0kXrKxsPNFoyBOxmPe8thwWWs3mV5aWNs7OzY2/sP8cfruHsORe3aoQCnep1Vpya6Pit6TQud1C2Q8Fm/IcGsrK2Fhecrm0dCsUzPT0+CUNga/MzIydbTVbn9f232Ys7j2/srL1xf3nEAyHsEAgFA5W1pZUqcx9JJ0qlatSLFb8UPADIXvyl1HPzo5/SU+Dv2bh0JLW527c2njOHicYDlFrNKUxwGMK96JnGSnXCM1OFQrtpQry+YwkE+GtcG4tiGaz9QX7OuF5f3f16saYs2BIRmjp9nS886GThA62sZfNIfT0kmQAsiPWWrAlA+3S6TBaCnezloM2XF7WL8ey+dgfOfvoZyMUDEPxzu+KTCXjmuIkw0GS9mHOsIdHJ6p7q4LlcxG62arlvdQ+tj7h7JM/nspKFOh5XqYyOelUMqHfZ1Sn5hKcGe9k05aToylCs0P7g7eJRHQCttFoft2O2nJ4wtl05al0Rt4pbYe+7mPS9rZMuknhoWxSZjVo1rar/mj8IPeqLQYsJMeHkzKaZ5a7U/V6e/A2SsGgMxWLt1Y27csFZ7/h6fSQ5OMbslsPd0krC4XhhJs+m13oN5xL+KWqg221AR6MtDGXVDImXPw4GJwFQ1YH/D6QH5NXtldDazXYXhKPjZzqyg7YVilSLOiEAeG0Bs3nRmQ23Xn//v2wE5kF00Sq8/0kgEHnNBjSOjPx+Oi0dityJ7oOpL3WXHbIby14kVuBEug9ztvcQ9q/f2p8VmYzQ3IS7I6/c9pS+JXxOe7+AxzpyvCy3d34kYkH5FpxW97YXZedLgxIWgRY+JwfGpdJnSr1CAXAma7NO1lFXciPyoM67rBeLcu7OpVpAWGb3traBq1jLm5g9T6mf5I6sDiaSsvZ3KjktHVCHADudX1C2gJiMp2VCS37gfB+5yw8aV/AZF0GAgHonhO7UsUqctzzJHrb0wC4G9e1AgggGAAEEAwAAggGAAEEA4AAggFAAMEAIIBgABBAMAAIIBgABBAMAAIIBgABBAMQAluG3zQa0Vl7/PrKxhN7X14iGIAQ7C8bX6nWJCr0J/KDodWSRYIBCEEy2V7xoFKpS1TExHveP3qxl5ytx7C2tivAoJucPNpap5lsSgrFitRqdSmWKpLLhrtV3fLyxuf0sCDaWpieGXnRWTAc9Q0B0F7EeGQ4K1vbRX/X65S2IMLalWrFxhY873nbDsbzYi/4P58ACEU6nZSsthRsg6aNzYLfcjhpfkvB876lP8KYtLwXpqdHXrTHvVbYm00CA866FIVC2f86FotJPp+W9Z3ik/PT45ekC5aWNhbiqdiz0mw9p7X/E/aYJ96XpqdHP7//HIIBiIByueoHxElPX+qk6Wat1vr06dPjL73ncYIBiA4LCJup0GlMay08Id2xqIlwyWt5LxcKzRfPnh3fvPsJBAMQQV7IOygx+AgggGAAEEAwAAggGAAEEAwAAggGAAEEA4AAggFAAMEAIIBgABBAMAAIIBgABDhbwekwlUpDVjZqsrmtZceWsWpIpfo+bi31RDLpmOQzcRkbScrUeEomRm3VG7INcK1rd1da5X9nqSxXrxdle7cutbrbl8mkYjI9mZKF01k5pSGRThEQ6B9h313pPBjs25U1FC69uiOLN0vSbbY+//mFnHzo/LAkE6G+l4AzfRcMhXJDvn95S5Zvn9z6dfYenpnLyEefHBOiAf2gr9ZjqNWbcvn1nRMNBWPZdk1bJ6/8bEeaTdadATrlNBjevl6SG8tlCcuVqwVZ24rOBh5Ar3I2K2GDjW9eK0q9Ed4Z2177tbd25dTT4+KqIWatkUq1LoVSTarVmrAQHu5mn7V0Kim5bFKPCQm5F+CEs2C4sVKWQrEhYVtZq8qWzoKMDXf+T6tr1+jmypYsaWnQRcF92ED4/OyYPDAz2vPh4KwrsbRajUTlsXGOWw7GOKxlYKFwfXmTUMCR2Ofk2s0NWV7dll7nLBg2NqsSFSvrnf8s5UpN1jbYjxPHt7y6oyeo8FvPnXAWDKXqyW6UcS+lcue/lFJZxxR6/JeLcFRrDR2P6u1BcGfBUK9Hp7ldcRJSLWlFJ+vQSzzp+UHqvryO2MUvxTYcTSbD2X0YvS2ZiPX8Z4cbDA6RyyTl1HhegOOamRz2py17WW//9F1k002nddrJNhldXd9lZgL3ZdOVM1MjMqul1xEM95BIxOXMAxMyNTEkhVK150ea0T2pZMJvZQ7lM9IH1zcRDPdj6z0MD2X8AgwKxhgABBAMAALoShyR3Uw1yMOP1m3uh5uDcDQEwz3Y9RAWCKVK05+VGORo8PSPjbrbEnp2JCP6G8FwDxYGhVJdmKk0Lf/9qOv0bS4T9y/iQf/it3uIdkuhQSjcxd4Pa0E1WZiirxEMh7BLFrio6WAWClG6NwbuOQuGKPU5Yw5+mPb4guAA9r6Qmf3NWTBEqc+ZTnceDDq+xorTh7D3JU5bs685+/VGacOXTLrzO9vicStEw0Fimpq8N/3NWW0eG4nOBMfkeEo6ZXP2WQ2YGPNy72GhwPvS/5zV5pnJtNxcqUijEW7nM5X0ZGai82AwCT0rDufi/uyEztIN9JiD5UA7FNrXMaC/OQuG09NpuXI1LtuFcJe0GhtJyeiQu9aLVYZ8NtEebBvwZCAPBoezGpTLxmVhPuvvBhUWa/5/8AN5SXRhD8tY+5pgAQaB0xHD82fyMj8b3u3Jj5zNy/QpN90IYJA5DYZUypOnPzgiE6NJOUl2In9gKi1PXhhmUAxwwPlu12anWPc3t313qfv7WNoA4UMP5uSDDw37A49APwh7t+uuBIOxHaGuLBbl6vWS7GpQuH4VGxkfGU7IIwt5efB0hpYC+krfBsO+sk71Ld+u+lOZtzdqUqk1/T0hj8vep2Syfdvv9HhK5ucyMqXHZIJAQP/p+2AAcHxhBwNXvAMIIBgABBAMAAIIBgABBAOAAIIBQADBACCAYAAQQDAACCAYAAQQDAACCAYAAQQDgACCAUAAwQAggGAAEOBs+fhisSrAoMvl+mOVclZwAiKIFZwARA7BACCAYAAQQDAACCAYAAQQDAACCAYAAQQDgACCAUAAwQAggGAAEEAwAAggGAAEEAwAAggGAAEEA4AAZys43ZfL9WC8n/8PgC7ofjBYILQa9oWWZocB4bXzoKUNHc9KXAC4172l3fYDoVWX7tGUiMX3AoIWBPpH2Eu7dafF0NKWQdMCoSnd1Wq/jqdHL2HvpgDonPvBRz8UatL9ULjzNRvt12RdW8AJt8HQ2juDSxgVtNnlbgswOBwHw0l0H+71+o12iwVAR9wFg1XIKFTKlnVj6FIAnXA3+OiHQgQqpD8b0nI6EOn3kPR/ms2WtAgd3MWzP/p5i8e8vhn/djgr0ZDIsJDyOm8M2UxutdaU1c2SVKsNPxyAAA2DuH7eksmYzIzn/GOvc3cdQ6MikWnC23UNsaR0ardUk5uru9JoEAg4mng8Jguzw5JKdXbxXR9tURelytP5WEdDuw1r2lIgFHAcjUZTlteKPd+67M+bqBz8Tiq1hnYjItQ9Qs+wz06vn1C4u/IQtXrTbzUAx2WD1PV6b0+bEwyHSGpfMcYl1ngfYnFPYrHe/uwQDIdIJeNaeHtwfKmEzlAkevuzwyf/EAlN/Smdeor3ePLjZNnnZXYy3/MtBofTlWWJDptYTosLpUpd1rbK/kBkkzEHHMKCwFqZMxM5J62FsKcrCYYjsmmoJrdh4CBeOxhcti77cz2GPmQXrsRZMAoDgjEGAAEEA4AAuhJH4N9Z2WrfVDWorMtrXWg7Mk/T/wiGe7AgqNtVbNwvIfvXmdsAWzLevs0Y/YuuxD1YIBAK72WXidd4T/oewXAI6z40WH/hQHY9B/eR9DeHwRChpqWDZu7+QlAIsrdlkMdbBoG7YIhUl5P+b7cxxtDfHLYYItQrcfCh9Tzi5TD2vpAL/c1hiyEqweA52dMy5nncQHUIu/yXW9L7m8NgiEcjHPyfwc2HNpGISSIeo+Wwx7LA7jrt9VuKcX9uN7Xd3youNHbzVEpcdwL2l49v/4cMJq/dihK6WCeiv26i8lsNzb1t70+afXIT0o2PrecvD051wOBw3yb0d50OoanphxK3PwIudCEY7MydagfEibC2bXKvtQDAhe7VJquoLa+LG8167ZZJVAY9gT7S3dPsfqX1B+6ae8dOR++8vYsMLAwIBKAbTqD9vVeRrRIzfgf0BE65AAIIBgABBAOAAIIBQADBACCAYAAQQDAACCAYAAQQDAACCAYAAQQDgACCAUAAwQAggGAAEEAwAAggGAAEWDCEud47gKDQ66QFQ0EARMm2hMyC4bYAiJJ1CZkFwxsCIEquSMgsGP5PSxhbRwEIsrr4AwmZBcPLWjYEQBRUtHxHQmbB8F0tNwRAFFjX/rsSspjneSU9fk38HWEAhMjq4Nf26mSo9i9w+nstrwuAMF2Sdl0M3X4wXNXyZS1VARCGupa/lXZdDJ0fDNp0sQ0l/0nLNwTASbP6969a/nmvLobuPbtJtlqtR/XwVS0XBMBJeVXLsxoKb0pEBLaZ1XD4kB6+rWVcAHSbXSrwcQ2FH0uEHHR35U+1/J5E4OoroM9ZGPyOlp9IxASCwfo4Wv5dv/xjaXcrygLAJRtotDGFT2ld+1ZUxhXu5N3r/9RuxaQePqPls1pm7vd8APdkAbCi5a+0fFkDIfSbpQ5zpIquAfG4Hv5E2s2e0wLguOzq4n/R8jdRG084yLFaABoQST18RMuzWi5qmdcyrWVYS1IA2LVAtp7CLS1L0r5J8ZtafqCBUJEe8f91l5uhsV80kwAAAABJRU5ErkJggg==",$="data:image/png;base64,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";const aa={class:"graph"},ta=(0,o.uE)('<svg class="graph__red" xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 84 84" fill="none" data-v-22d06067><g filter="url(#filter0_d_704_328)" data-v-22d06067><circle cx="42" cy="22" r="7" fill="#FF8B8B" data-v-22d06067></circle></g><defs data-v-22d06067><filter id="filter0_d_704_328" x="0" y="0" width="84" height="84" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-22d06067><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-22d06067></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-22d06067></feColorMatrix><feOffset dy="20" data-v-22d06067></feOffset><feGaussianBlur stdDeviation="17.5" data-v-22d06067></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.354167 0 0 0 0 0.196741 0 0 0 0 0.196267 0 0 0 0.4 0" data-v-22d06067></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_704_328" data-v-22d06067></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_704_328" result="shape" data-v-22d06067></feBlend></filter></defs></svg><img class="graph__categories" src="'+R+'" alt="" data-v-22d06067><img class="graph__analitics" src="'+T+'" alt="" data-v-22d06067><img class="graph__questions" src="'+_+'" alt="" data-v-22d06067><img class="graph__photo" src="'+$+'" alt="" data-v-22d06067><svg class="graph__yellow" xmlns="http://www.w3.org/2000/svg" width="92" height="81" viewBox="0 0 92 81" fill="none" data-v-22d06067><g filter="url(#filter0_d_704_326)" data-v-22d06067><circle cx="46" cy="26" r="11" fill="#FFC86F" data-v-22d06067></circle></g><defs data-v-22d06067><filter id="filter0_d_704_326" x="0" y="0" width="92" height="92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB" data-v-22d06067><feFlood flood-opacity="0" result="BackgroundImageFix" data-v-22d06067></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" data-v-22d06067></feColorMatrix><feOffset dy="20" data-v-22d06067></feOffset><feGaussianBlur stdDeviation="17.5" data-v-22d06067></feGaussianBlur><feColorMatrix type="matrix" values="0 0 0 0 0.6125 0 0 0 0 0.394428 0 0 0 0 0.13526 0 0 0 0.3 0" data-v-22d06067></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_704_326" data-v-22d06067></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_704_326" result="shape" data-v-22d06067></feBlend></filter></defs></svg>',6),ea=[ta];function na(a,t,e,n,s,l){return(0,o.wg)(),(0,o.iD)("div",aa,ea)}var oa={name:"GraphBlock"};const sa=(0,k.Z)(oa,[["render",na],["__scopeId","data-v-22d06067"]]);var la=sa,ca=e.p+"img/pin.ffd2557c.svg",da=e.p+"img/clock.73d31ae6.svg",ra=e.p+"img/tg.aade5343.svg",ia=e.p+"img/vk.d3194320.svg",Aa=e.p+"img/yzen.d83ebf8d.svg";const ua=(0,o.uE)('<div class="dialog__contacts" data-v-c946801c><h2 class="dialog__title" data-v-c946801c>Контактная информация</h2><div class="dialog__geo" data-v-c946801c><div class="dialog__office gray-heading" data-v-c946801c><img src="'+ca+'" alt="" data-v-c946801c><span data-v-c946801c>Наш офис</span></div><div class="dialog__address" data-v-c946801c>Санкт-Петербург, ул. Такая-то, д. 1</div><button class="dialog__show-map" data-v-c946801c>Показать на карте</button></div><div class="dialog__contact" data-v-c946801c><dl data-v-c946801c><div data-v-c946801c><dt data-v-c946801c>Звоните:</dt><dd data-v-c946801c><a href="tel:+74951234567" data-v-c946801c>+7 (495) 123-45-67</a></dd></div><div data-v-c946801c><dt data-v-c946801c>Пишите:</dt><dd data-v-c946801c><a href="mailto:info@test.ru" data-v-c946801c>info@test.ru</a></dd></div></dl><button class="dialog__btn white-btn" data-v-c946801c> Заказать звонок </button></div><div class="dialog__time" data-v-c946801c><div class="dialog__time-title gray-heading" data-v-c946801c><img src="'+da+'" alt="" data-v-c946801c><span data-v-c946801c>Режим работы</span></div><div class="dialog__work-days" data-v-c946801c><div data-v-c946801c>Пн-Пт — с 10:00 до 18:00</div><div data-v-c946801c>Сб-Вс — выходной</div></div></div><div class="dialog__social" data-v-c946801c><div class="dialog__social-title gray-heading" data-v-c946801c><span data-v-c946801c>Мы в соцсетях</span></div><ul class="dialog__socila-list" data-v-c946801c><li class="border" data-v-c946801c><a href="#" data-v-c946801c><img src="'+ra+'" alt="" data-v-c946801c></a></li><li class="border" data-v-c946801c><a href="#" data-v-c946801c><img src="'+ia+'" alt="" data-v-c946801c></a></li><li class="" data-v-c946801c><a href="#" data-v-c946801c><img src="'+Aa+'" alt="" data-v-c946801c></a></li></ul></div></div>',1),ga=[ua];function va(a,t,e,n,s,l){return e.open?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"dialog",onClickCapture:t[0]||(t[0]=(...a)=>l.closeDialog&&l.closeDialog(...a))},ga,32)):(0,o.kq)("",!0)}var fa={name:"Dialog",props:{open:{type:Boolean}},methods:{closeDialog(a){a.target===a.currentTarget&&this.$emit("closeDialog",!1)}}};const ma=(0,k.Z)(fa,[["render",va],["__scopeId","data-v-c946801c"]]);var ha=ma,pa={name:"App",data(){return{show:!1,open:!1}},watch:{open(a){a?document.querySelector("body").style.overflow="hidden":document.querySelector("body").style=null}},methods:{changeShow(a){this.show=a},changeShowHead(a){!0===a?this.show=a:(this.$refs.mob.$refs.menu.style.transform="translate(-100%)",setTimeout((()=>{this.show=a}),300))},showDialog(a){this.open=a}},components:{Header:X,MobMenu:q,GraphBlock:la,Dialog:ha}};const wa=(0,k.Z)(pa,[["render",l]]);var Wa=wa,Ba=e(2483);const ba={class:"main"},Ca={class:"content"};function Ia(a,t,e,n,s,l){const c=(0,o.up)("ContentBlock");return(0,o.wg)(),(0,o.iD)("main",ba,[(0,o._)("section",Ca,[(0,o.Wm)(c)])])}var ya=e.p+"img/arrow.21050444.svg";const Sa=a=>((0,o.dD)("data-v-41f9a3a9"),a=a(),(0,o.Cn)(),a),Ea={class:"container"},Da=Sa((()=>(0,o._)("h1",{class:"content__title"}," Техническая поддержка сайтов, CRM систем и мобильных приложений ",-1))),ka=Sa((()=>(0,o._)("div",{class:"content__text"}," Профессиональное техническое сопровождение и обслуживание сайтов: полный комплекс услуг от опытных экспертов ",-1))),Ma=Sa((()=>(0,o._)("button",{class:"content__scroll"},[(0,o._)("img",{src:ya,alt:""})],-1)));function Xa(a,t,e,n,s,l){const c=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("div",Ea,[Da,ka,(0,o.Wm)(c,{class:"content__btn dark-blue-btn",to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("Подключиться")])),_:1}),Ma])}var Za={name:"ContentBlock"};const Pa=(0,k.Z)(Za,[["render",Xa],["__scopeId","data-v-41f9a3a9"]]);var Ga=Pa,Ja={name:"IndexPage",components:{ContentBlock:Ga}};const xa=(0,k.Z)(Ja,[["render",Ia],["__scopeId","data-v-26d2db5d"]]);var Qa=xa;const Ua=[{path:"/",name:"IndexPage",component:Qa}],Va=(0,Ba.p7)({history:(0,Ba.PO)("/"),routes:Ua});var Oa=Va,ja=e(65),La=(0,ja.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.ri)(Wa).use(La).use(Oa).mount("#app")}},t={};function e(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return a[n].call(s.exports,s,s.exports,e),s.exports}e.m=a,function(){var a=[];e.O=function(t,n,o,s){if(!n){var l=1/0;for(i=0;i<a.length;i++){n=a[i][0],o=a[i][1],s=a[i][2];for(var c=!0,d=0;d<n.length;d++)(!1&s||l>=s)&&Object.keys(e.O).every((function(a){return e.O[a](n[d])}))?n.splice(d--,1):(c=!1,s<l&&(l=s));if(c){a.splice(i--,1);var r=o();void 0!==r&&(t=r)}}return t}s=s||0;for(var i=a.length;i>0&&a[i-1][2]>s;i--)a[i]=a[i-1];a[i]=[n,o,s]}}(),function(){e.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return e.d(t,{a:t}),t}}(),function(){e.d=function(a,t){for(var n in t)e.o(t,n)&&!e.o(a,n)&&Object.defineProperty(a,n,{enumerable:!0,get:t[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(a){if("object"===typeof window)return window}}()}(),function(){e.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)}}(),function(){e.p="/"}(),function(){var a={143:0};e.O.j=function(t){return 0===a[t]};var t=function(t,n){var o,s,l=n[0],c=n[1],d=n[2],r=0;if(l.some((function(t){return 0!==a[t]}))){for(o in c)e.o(c,o)&&(e.m[o]=c[o]);if(d)var i=d(e)}for(t&&t(n);r<l.length;r++)s=l[r],e.o(a,s)&&a[s]&&a[s][0](),a[s]=0;return e.O(i)},n=self["webpackChunkswc_test"]=self["webpackChunkswc_test"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(2266)}));n=e.O(n)})();
//# sourceMappingURL=app.a538d4e6.js.map