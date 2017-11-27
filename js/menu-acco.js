      function e() {
            var e = $(window).width(),
                t = $(".menu-acco__trigger"),
                n = t.width(),
                i = e - n * t.length;
            return i > 550 ? 550 : i
        }
        $(".menu-acco__trigger").on("click", function(t) {
            t.preventDefault();
            var n = $(this),
                i = n.closest(".menu-acco"),
                o = n.closest(".menu-acco__item"),
                a = i.find(".menu-acco__item"),
                c = a.filter(".active"),
                r = o.find(".menu-acco__content"),
                u = c.find(".menu-acco__content"),
                s = i.find(".menu-acco__text"),
                l = e();
            o.hasClass("active") ? (o.removeClass("active"), s.fadeOut(function() {
                r.animate({
                    width: "0px"
                })
            })) : (a.removeClass("active"), o.addClass("active"), s.hide(), u.animate({
                width: "0px"
            }), r.animate({
                width: l + "px"
            }, function() {
                s.fadeIn()
            }))
        }), $(document).on("click", function(e) {
            var t = $(e.target);
            t.closest(".menu-acco").length || ($(".menu-acco__content").animate({
                width: "0px"
            }), $(".menu-acco__item").removeClass("active"))
        })

/*
.menu-acco {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
  display: flex;
}

.menu-acco__item {
    height: 100%;

    &.active {
        .menu-acco__trigger-text {
            color: $yellow;
        }
    }
}

.menu-acco__trigger {
    width: rem(80px);
    display: block;
    height: 100%;
    float: left;
    @include cover;
    text-decoration: none;
  position: relative;
}

.menu-acco__trigger-text {
    font-size: rem(40px);
    color: #fff;
    @include gagalin;
    text-align: center;
    white-space: nowrap;
  position: absolute;
  transform: rotate(-90deg) translateY(-50%);
  transform-origin: 0 0;
  left: 50%;
  top: 100%;
  margin-top: rem(-20px);
}

.menu-acco__content {
    height: 100%;
    float: left;
    background: rgba(#2f3234, .93);
    width: 0;
    overflow: hidden;
}

.menu-acco__text {
    @include ubuntu(light);
    font-size: rem(14px);
    color: #fff;
    padding: rem(60px) rem(30px);
    width: 100%;
  line-height: 1.8;
  display: none;
}
*/    
