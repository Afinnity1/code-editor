function updateOutput() {
				
    $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>");

    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val())
        
}
/* Here we use the jQuery hover action within the toggle class so that when the user hovers over the button container div a grey 
color is highlighted over the individual button the user is hovering over;(we made use of the .addClass() jquery action) and
once the user hovers past the button he was on before the color returns back to normal;(we made use of the .removeClass() jquery action)
*/
$(".toggleButton").hover(function(){

    $(this).addClass("highlightedButton");

}, function(){

    $(this).removeClass("highlightedButton");

});
/* Here we gave the toggleButton a click function. Individually the "html" & "output" have been assigned a blue color 
due to the active class, then we use the ".toggleClass" action to turn the remaining buttonContainer buttons blue when
clicked and the ".removeClass" action to remove the blue color when clicked again.		
*/
$(".toggleButton").click(function() {

    $(this).toggleClass("active");
    
    $(this).removeClass("highlightedButton");
/* This next two lines of code carry out the action of hidding and unhiding the bodycontainer text area user input boxes when its		
individual toggleButton is clicked.
*/
    var panelId = $(this).attr("id") + "Panel";
    
    $("#" +panelId).toggleClass("hidden");
//This next two lines of code split the code input textarea boxes into 4 equal parts so it can stretch out and fit the width of the screen perfectly.		
    var numberOfActivePanels = 4 - $(".hidden").length;
    
    $(".Panel").width(($(window).width() / numberOfActivePanels) - 10);

})
//we used this next two lines of codes To resize the "textarea" box width and height for the body containers text area were the user will input texts & codes	
$(".Panel").height($(window).height() - $("#topbar-container").height() - 15);

$(".Panel").width(($(window).width() / 2) - 10);

updateOutput();
// this function was created so that the html and css codes the user wrote in the input box will carry out the supposed cod action.	
$("textarea").on('change keyup paste', function() {
// The updateOutput() is a function containing the codes that make the html and css & javascript codes the user wrote in the input box will carry out the supposed cod action.
    updateOutput();
    
})