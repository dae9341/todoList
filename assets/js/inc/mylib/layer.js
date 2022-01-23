todoPrj.layer=new __layer();

function __layer() {
    const me = this;
    me.layerWrapper =`
        <div class="layer">
            <div class="layer__contentWrapper"></div>
        </div>`;

    me.$layerContentWrapper=$(".layer__contentWrapper");


    me.open=function (layerId) {
        layerId = (typeof layerId == "object") ? $(layerId).attr("href") : layerId;
        var hrefId=layerId.replace("#","");
        var $layerContent;

        $(".layer__content").each(function (i) {
            if($(this).attr("data-layerId") == hrefId){
                $layerContent = $(this);
            }
        })

        console.log($layerContent[0]);
        todoPrj.body.append(me.layerWrapper);
        $(".layer__contentWrapper").addClass(hrefId);
        $(".layer__contentWrapper").append($layerContent[0])

    };

    me.close = function () {

    };

    return me;

}