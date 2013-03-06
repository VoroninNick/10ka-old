function Timer()
{

    this.delay=1000;
    this.handler=function(){};
    this.time_limit=0;
    this.iterations_limit=0;
    this.iterations=0;
    this.arg=[];

    var that=this;
    this.timer_id=false;


    this.start=function()
    {
        that.timer_id=setInterval(that.tick,that.delay);
    };
    this.tick=function()
    {
        //alert(that.iterations);
        if(that.iterations_limit!=0)
        {
            if(that.iterations<that.iterations_limit)
            {
                that.iterations++;
                that.handler.call(that.arg);
            }
            else
            {
                that.stop();
            }
        }

    };
    this.reset=function()
    {
        that.stop();
        that.start();
    };
    this.stop=function()
    {
        clearInterval(that.timer_id);
    };
}