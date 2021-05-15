//"class" is the keyword, used to create the class
//"private" is the recomended modifier for variables
//"public" is the recomended modifier for functions
//both export & default keywords used to export the component
//constructor keyword, used to define the constructor.
//we will refer current class members by usinh "this" keyword
class firstComponent{
    private sub_one:string;
    private sub_two:string;
    private sub_three:string;

    constructor(){
        this.sub_one = "Angular12";
        this.sub_two = "NodeJS";
        this.sub_three = "MongoDB";
    }

    public getSubOne():string{
        return this.sub_one;
    };

    public getSubTwo():string{
        return this.sub_two;
    };

    public getSubThree():string{
        return this.sub_three;
    };

};
export default firstComponent;