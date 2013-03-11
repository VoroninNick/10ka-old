
function Slider (dl)
{

    var that=this;

    that.currentPosition=1;
    that.options={
        slideWidth:1332-41*3,
        titleWidth:41,
        position:1,
        allowAuto:true,
        timeout:10000
    };
    that.images=[];
    that.slides=[];
    that.headers=[];
    that.dl=$(dl);

    this.init= function()
    {

        //that.dl.css({overflow:'hidden'});
        that.dl.find('dt').each(function(index,dt)
        {
            dt=$(dt);
            dt.addClass('spine');
            dt.addClass('spine_'+(index+1));
            if(that.options.position==index+1)
            {
                dt.addClass('active');
            }
            else if(that.options.position==index)
            {
                dt.addClass('next');
            }
            else if(that.options.position==index+2)
            {
                dt.addClass('previous');
            }
            dt.css({
                position:'absolute',
                zIndex:3,
                display:'block',
                width:'360px',
                height:'41px',
                padding:'0px 10px',
                transform:'rotate(270deg)',
                msTransformOrigin:'21px 0 0',
                textAlign:'right',
                top:'170px',//359  original
                marginLeft:'-21px'    //-21px
            });
            var div=$('<div>'+(index+1)+'</div>');
            div.addClass('index');
            div.css({
                position:'absolute',
                zIndex:2,
                display:'block',
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
                //overflow:'hidden',
                zIndex:20000
            });
            if(that.options.position==index+1)
            {
                divActiveCorner.css({display:'block'});
            }
            else
            {
                divActiveCorner.css({display:'none'});
            }

            if(that.options.position>=index+1) // prev
            {
                dt.css({left:(index)*that.options.titleWidth-150+'px'});
                divActiveCorner.css({left:(index+1)*that.options.titleWidth-150+'px'});
            }
            else if(that.options.position<index+1) // next
            {
                dt.css({left:((index)*that.options.titleWidth+that.options.slideWidth-190)+'px'});
                divActiveCorner.css({left:((index+1)*that.options.titleWidth+that.options.slideWidth-190)+'px'});
            }
            dt.after(divActiveCorner);
            //divActiveCorner.next('dd');
            var dd=divActiveCorner.next('dd');
            dd.addClass('slide');
            dd.addClass('slide_'+(index+1));
            if(that.options.position==index+1)
            {
                dd.addClass('active');
            }
            dd.css({
                display:'block',
                msTransformOrigin:'50% 50% 0',
                zIndex:1,
                position:'absolute',
                //height:'380px',
                width:that.options.slideWidth+'px',
                margin:'0',
                paddingLeft:'41px',
               // overflow:'hidden'
            });

            if(that.options.position>=index+1) // prev
            {
                dd.css({left:(index)*that.options.titleWidth+'px'});
            }
            else if(that.options.position<index+1) // next
            {
                dd.css({left:((index-1)*that.options.titleWidth+that.options.slideWidth)+'px'});
            }
            dd.find('img').css({width:'100%'});
        });
    };
    this.initPosition=function()
    {
        that.headers.each(function(index,dt)
        {
            dt=$(dt);
            if(index==0)
            {
                //dt.find('span.title').css({marginLeft:'20px'});
            }





            if(that.options.position>=index+1) // prev
            {
                dt.css({left:(index)*that.options.titleWidth-150+'px'});
                dt.find('div.activeCorner').css({left:(index+1)*that.options.titleWidth-150+'px'});
            }
            else if(that.options.position<index+1) // next
            {
                dt.css({left:((index)*that.options.titleWidth+that.options.slideWidth-190)+'px'});
                dt.find('div.activeCorner').css({left:((index+1)*that.options.titleWidth+that.options.slideWidth-190)+'px'});
            }
        });
    }

    this.init();
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
        if(that.options.position!=required_pos)
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
                active_dd.css({left:((required_pos-2)*that.options.titleWidth)+'px'});
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
            required_dt.addClass('active');

            var required_divActiveCorner = required_dt.next('div.activeCorner');
            required_divActiveCorner.css({display:'block'});


            //divActiveCorner.next('dd');
            var required_dd=required_divActiveCorner.next('dd');


            required_dd.addClass('active');


            if(required_pos<active_pos) // prev  required
            {
                for(var i=active_pos+1;i<required_pos+1;i++)
                {
                    var new_dd_left =(i-1)*that.options.titleWidth+that.options.slideWidth;
                    var new_dt_left =(i-1)*that.options.titleWidth+that.options.slideWidth;
                    var new_div_left =(i-1)*that.options.titleWidth+that.options.slideWidth;



                    that.dl.find('dd').eq(i-1).animate({left:'+='+new_dd_left},1000);
                    that.dl.find('dt').eq(i-1).animate({left:'+='+new_dt_left},1000);
                    that.dl.find('div.activeCorner').eq(i-1).animate({left:'+='+new_div_left},1000);

                }
            }
            else if(required_pos>active_pos) // next  required
            {
                for(var i=active_pos+1;i<required_pos+1;i++)
                {
                    var new_dd_left =(i-1)*that.options.titleWidth+that.options.slideWidth;
                    var new_dt_left =(i-1)*that.options.titleWidth+that.options.slideWidth;
                    var new_div_left =(i-1)*that.options.titleWidth+that.options.slideWidth;



                    that.dl.find('dd').eq(i-1).animate({left:'-='+new_dd_left},1000);
                    that.dl.find('dt').eq(i-1).animate({left:'-='+new_dt_left},1000);
                    that.dl.find('div.activeCorner').eq(i-1).animate({left:'-='+new_div_left},1000);

                }
            }






        }
        that.options.position=required_pos;
    };
    that.moveLeftBy=function(elements,px)
    {
        $(elements).each(function(index,element){
            var currentLeft=that.ConvertCssPxToInt(element.css('left'));
            element.css({left:currentLeft+px+'px'});
        });
    };


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
    this.next=function()
    {

    };


    return this;
};