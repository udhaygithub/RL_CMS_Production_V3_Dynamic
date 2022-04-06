// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var IterationNumber = context.variableManager.getValue("Iterationval");
var IterationNumber1=parseInt(IterationNumber);
if (IterationNumber1%4==0) 
{
      var CondCheck=4;
      context.variableManager.setValue("OnceInFour",CondCheck);
}

else if (IterationNumber1%3==0) 
{
      var CondCheck=3;
      context.variableManager.setValue("OnceInFour",CondCheck);
    
}
else if (IterationNumber1%2==0) 
{
    var CondCheck=2;
      context.variableManager.setValue("OnceInFour",CondCheck);
    
}
else
{
     var CondCheck=1;
      context.variableManager.setValue("OnceInFour",CondCheck);
}