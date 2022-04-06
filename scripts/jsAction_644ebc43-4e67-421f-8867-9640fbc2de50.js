// Javascript skeleton.
// Edit and adapt to your needs.
// The documentation of the NeoLoad Javascript API
// is available in the appendix of the documentation.

// Get variable value from VariableManager
var IterationNumber = context.variableManager.getValue("IterationVal2.Values");
context.variableManager.setValue("Iterationval",IterationNumber);
var IterationNumber1=parseInt(IterationNumber);
if (IterationNumber1%2==0) 
{
      var CondCheck=2;
      context.variableManager.setValue("OnceIntwo",CondCheck);
}
else
{
    var CondCheck=1;
      context.variableManager.setValue("OnceIntwo",CondCheck);
}
if (IterationNumber1%3==0) 
{
      var CondCheck=3;
      context.variableManager.setValue("EventVar",CondCheck);
   
}
else if (IterationNumber1%2==0) 
{
    var CondCheck=2;
      context.variableManager.setValue("EventVar",CondCheck);
   
}
else
{
     var CondCheck=1;
      context.variableManager.setValue("EventVar",CondCheck);
}