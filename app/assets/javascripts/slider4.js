
function Slider4 (dl)
{

    var that=this;
    var activeIndex=0;
    that.currentPosition=1;
    that.options={
        position:1,
        allowAuto:true,
        timeout:10000,
        slideWidth:1332-41*3,
        titleWidth:41
    };
    that.images=[];
    that.slides=[];
    that.headers=[];
    that.dl=$(dl);
    // Convert a css px value to int.
    that.ConvertCssPxToInt=function(cssPxValueText) {

        // Set valid characters for numeric number.
        var validChars = "0123456789.";

        // If conversion fails return 0.
        var convertedValue = 0;

        // Loop all characters of
        for (i = 0; i < cssPxValueText.length; i++) {

            // Stop search for valid numeric characters,  when a none numeric number is found.
            if (validChars.indexOf(cssPxValueText.charAt(i)) == -1) {

                // Start conversion if at least one character is valid.
                if (i > 0) {
                    // Convert validnumbers to int and return result.
                    convertedValue = parseInt(cssPxValueText.substring(0, i));
                    return convertedValue;
                }
            }
        }

        return convertedValue;
    };
    this.init= function()
    {
        that.activeIndex=that.options.position-1;
        that.headers=that.dl.find('dt');
        /*
         $(that.container).find('dl>li>img').each(function(index,image){
         var src=image.attr('src');
         var title=image.attr('title');
         if(src && title)
         {
         var img_index=that.images.length;
         that.images[img_index]={source:src,title:title};
         }
         });
         */

//that.dl=$(that.container).find('dl');
//that.headers=$(that.dl).find('dt');
//that.slides=$(that.dl).find('dd');
        that.dl.css({overflow:'hidden'});
        that.dl.find('dt').each(function(index,dt)
        {
            dt=$(dt);
            dt.addClass('spine');
            dt.addClass('spine_'+(index+1));
            if(that.activeIndex==index)
            {
                dt.addClass('active');
            }
            else if(that.activeIndex==index-1)
            {
                dt.addClass('next');
            }
            else if(that.activeIndex==index+1)
            {
                dt.addClass('previous');
            }
            dt.css({
                position:'absolute',
                zIndex:3,
                display:'block',
                width:'360px',
                height:that.options.titleWidth+'px',
                padding:'0px 10px',
                transform:'rotate(270deg)',
                msTransformOrigin:'21px 0 0',
                textAlign:'right',
                top:'170px',//359  original
                marginLeft:'-21px',    //-21px
                color: '#347532',
                backgroundColor: 'rgba(255, 255, 255, 0.50)'
            });
            //var dt_left=index*41+'px';
            //dt.css({left:dt_left});
            var div=$('<div>'+(index+1)+'</div>');
            div.addClass('index');
            div.css({
                position:'absolute',
                zIndex:2,
                display:'none',
                width:'41px',
                height:'41px',
                textAlign:'center',
                bottom:'-21px',
                left:'20px',
                transform:'rotate(90deg)',
                msTransformOrigin:'21px 0 0'
            });
            dt.append(div);

            var divActiveCorner = $('<div class="activeCorner"></div>');
            divActiveCorner.addClass('spine_'+(index+1));
            divActiveCorner.css({
                position:'absolute',
                top:'25px',
                overflow:'hidden',
                zIndex:20000
            });
            if(that.activeIndex==index)
            {
                divActiveCorner.css({display:'block'});
            }
            else
            {
                divActiveCorner.css({display:'none'});
            }

            if(that.activeIndex>=index) // prev
            {
                dt.css({left:(index)*that.options.titleWidth-150+'px'});
                divActiveCorner.css({left:(index+1)*that.options.titleWidth+'px'});
            }
            else if(that.activeIndex<index) // next
            {
                dt.css({left:((index-1)*that.options.titleWidth+that.options.slideWidth-150)+'px'});
                divActiveCorner.css({left:((index+1)*that.options.titleWidth+that.options.slideWidth)+'px'});
            }
            dt.after(divActiveCorner);
            //divActiveCorner.next('dd');
            var dd=divActiveCorner.next('dd');
            dd.addClass('slide');
            dd.addClass('slide_'+(index+1));
            if(that.activeIndex==index)
            {
                dd.addClass('active');
            }
            dd.css({
                display:'block',
                msTransformOrigin:'50% 50% 0',
                zIndex:1,
                position:'absolute',
                height:'380px',
                width:that.options.slideWidth+'px',
                margin:'0',
                paddingLeft:'0px',
                overflow:'hidden'
            });

            if(that.activeIndex>=index) // prev
            {
                dd.css({left:(index)*that.options.titleWidth+'px'});
            }
            else if(that.activeIndex<index) // next
            {
                dd.css({left:((index-1)*that.options.titleWidth+that.options.slideWidth)+'px'});
            }

        });
    };
    that.dl.parent().resize(function()
    {
               // alert('resize');
          var sliderWidth=that.dl.parent().css('width');

        //alert('resize:'+sliderWidth);
        //that.options.slideWidth=sliderWidth-(that.headers.length-1)*that.options.titleWidth;
          that.initPosition();
    });

    this.init();
    this.initPosition=function()
    {
        var sliderWidth=that.ConvertCssPxToInt(that.dl.parent().css('width'));
        var sliderHeight=that.ConvertCssPxToInt(that.dl.parent().css('height'));
        that.headers.each(function(index,dt){
        that.options.slideWidth=sliderWidth-(that.headers.length-1)*that.options.titleWidth;


            dt=$(dt);
            var divActiveCorner=dt.next('div.activeCorner');
            var dd=divActiveCorner.next('dd');
              //alert(sliderWidth-that.headers.length*that.options.titleWidth);
            dd.css({width:that.options.slideWidth,
                height:sliderHeight});

        if(that.activeIndex>=index) // prev
        {

            dt.css({left:(index)*that.options.titleWidth-150+'px'});

            divActiveCorner.css(
                {
                    left:(index+1)*that.options.titleWidth+'px'

                });

            dd.css({
                left:(index)*that.options.titleWidth+'px'

            });
        }
        else if(that.activeIndex<index) // next
        {
            dt.css({left:((index-1)*that.options.titleWidth+that.options.slideWidth-150)+'px'});
            dt.next('div.activeCorner').css({left:((index+1)*that.options.titleWidth+that.options.slideWidth)+'px'});
            dt.next().next('dd').css({left:((index-1)*that.options.titleWidth+that.options.slideWidth)+'px'});
        }
        });
    };
    that.initPosition();

    this.bindClickHandler=function()
    {
        that.dl.find('dt').click(function(){
            var dt=$(this);
            //if(!dt.hasClass('active'))
            //{
            var active_pos=that.dl.find('dt.active>div.index').text()*1;
            //that.hideSlide(active_pos);
            var new_pos=dt.find('div.index').text()*1;
            that.showSlide(new_pos);
            //dt.removeClass('spine_'+required_pos);
            //var divActiveCorner=dt.next();
            //var dd=divActiveCorner.next();
            //}
        });
    }

    this.bindClickHandler();

    this.hideSlide=function()
    {
        var active_dt=that.dl.find('dt.active');
        active_dt.removeClass('active');
        var active_dd=active_dt.next().next();
        active_dd.removeClass('active');
        //alert(dd.attr('class'));
        active_dd.css({left:''});

        var divActiveCorner= active_dt.next();
        divActiveCorner.css({display:'none'});
    }
    this.showSlide= function(pos)
    {

        var required_pos=pos;
        var required_index=pos-1;
        if(that.activeIndex!=required_index)
        {

            /* hide */

            var active_dt=that.dl.find('dt.active');
            active_dt.removeClass('active');
            var active_dd=active_dt.next().next();
            active_dd.removeClass('active');
            //alert(dd.attr('class'));
            //alert(that.dl.find('dt.active').attr('class'));
            var active_pos=active_dt.find('div.index').text()*1;

            if(active_pos>required_pos) // prev  required
            {

            }
            else if(active_pos<required_pos) // next  required
            {
                //active_dd.css({left:((required_pos-2)*that.options.titleWidth)+'px'});
            }
            //alert('active_pos:'+active_pos);
            if(active_pos>1)
                that.dl.find('dt').eq(active_pos-2).removeClass('previous');
            if(active_pos<that.dl.find('dt').length)
                that.dl.find('dt').eq(active_pos).removeClass('next');

            var active_divActiveCorner= active_dt.next();
            active_divActiveCorner.css({display:'none'});

            /* end hide */
            var required_dt=that.dl.find('dt').eq(required_pos-1);
            required_dt=$(required_dt);
            //dt.addClass('spine');
            //dt.addClass('spine_'+(index+1));
            required_dt.addClass('active');
            //var dt_left=index*41+'px';
            //dt.css({left:dt_left});
            //var div=required_dt.find('div.index');

            var required_divActiveCorner = required_dt.next('div.activeCorner');
            required_divActiveCorner.css({display:'block'});


            //divActiveCorner.next('dd');
            var required_dd=required_divActiveCorner.next('dd');


            required_dd.addClass('active');


            if(required_pos<active_pos) // prev  required
            {   //alert('prev');
                var elements=[];
                for(var i=required_pos+1;i<=active_pos;i++)
                {

                    //  that.dl.find('dd').eq(i).css({left:(i-1)*41+680+'px'});


                    //  that.dl.find('dt').eq(i).css({left:(i-1)*41-150+680+'px'});
                    //  that.dl.find('div.activeCorner').eq(i).css({left:(i)*41-150+680+'px'});
                    var new_dd_left =(i-1)*that.options.titleWidth;
                    var new_dt_left =(i-1)*that.options.titleWidth;
                    var new_div_left =(i-1)*that.options.titleWidth;

                    // elements[elements.length]=that.dl.find('dd').eq(i-1);
                    // elements[elements.length]=that.dl.find('dt').eq(i-1);
                    // elements[elements.length]=that.dl.find('div.activeCorner').eq(i-1);

                    //alert(that.options.slideWidth);
                    //alert(that.options.slideWidth-that.options.titleWidth);
                    that.dl.find('dd').eq(i-1).animate({left:'+='+(that.options.slideWidth-that.options.titleWidth)},1000);
                    that.dl.find('dt').eq(i-1).animate({left:'+='+(that.options.slideWidth-that.options.titleWidth)},1000);
                    that.dl.find('div.activeCorner').eq(i-1).animate({left:'+='+(that.options.slideWidth-that.options.titleWidth)},1000);
                }


                //active_dd.css({left:(active_pos-1)*41-41+680+'px'});
                //active_dt.css({left:(active_pos-2)*41-150+680+'px'});
                //active_divActiveCorner.css({left:(active_pos)*41-190+680+'px'});


            }
            else if(required_pos>active_pos) // next  required
            {
                var elements=[];
                for(var i=active_pos+1;i<required_pos+1;i++)
                {
                    if(i==1)
                    continue;
                    var new_dd_left =(i-1)*that.options.titleWidth;
                    var new_dt_left =(i-1)*that.options.titleWidth;
                    var new_div_left =(i-1)*that.options.titleWidth;

                    //elements[elements.length]=that.dl.find('dd').eq(i-1);
                    //elements[elements.length]=that.dl.find('dt').eq(i-1);
                    //elements[elements.length]=that.dl.find('div.activeCorner').eq(i-1);

                    // that.dl.find('dd').eq(i-1).container('co');
                    // that.dl.find('dt').eq(i-1);
                    // that.dl.find('div.activeCorner').eq(i-1);
                    //alert('next');

                    //that.dl.find('dd').eq(i-1).css({left:(i-1)*41+'px'});


                    //that.dl.find('dt').eq(i-1).css({left:(i-1)*41-150+'px'});
                    //that.dl.find('div.activeCorner').eq(i-1).css({left:(i)*41-150+'px'});


                    // that.dl.find('dd').eq(i-1).animate({left:'-='+that.options.slideWidth},1000);
                    // that.dl.find('dt').eq(i-1).animate({left:'-='+that.options.slideWidth},1000);
                    // that.dl.find('div.activeCorner').eq(i-1).animate({left:'-='+that.options.slideWidth},1000);
                    // alert(that.options.slideWidth-that.options.titleWidth);
                    that.dl.find('dd').eq(i-1).animate({left:'-='+(that.options.slideWidth-that.options.titleWidth)},1000);
                    that.dl.find('dt').eq(i-1).animate({left:'-='+(that.options.slideWidth-that.options.titleWidth)},1000);
                    that.dl.find('div.activeCorner').eq(i-1).animate({left:'-='+(that.options.slideWidth-that.options.titleWidth)},1000);

                }
                //active_dd.css({left:(active_pos-1)*41+'px'});
                //active_dt.css({left:(active_pos-1)*41-150+'px'});
                //active_divActiveCorner.css({left:(active_pos)*41-150+'px'});



            }






        }
        that.activeIndex=required_index;
    };
    that.moveLeftBy=function(elements,px)
    {
        $(elements).each(function(index,element){
            var currentLeft=that.ConvertCssPxToInt(element.css('left'));
            element.css({left:currentLeft+px+'px'});
        });
    };



    this.next=function()
    {

    };


    return this;
};