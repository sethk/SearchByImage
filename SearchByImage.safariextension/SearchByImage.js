document.addEventListener("contextmenu", function(event)
{
	if (event.target.nodeName === "IMG")
		safari.self.tab.setContextMenuEventUserInfo(event, event.target.src)
}, false);