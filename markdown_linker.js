const mds = {
    "simplesound" : {lnk: "https://raw.githubusercontent.com/Varrox/simplesound/main/README.md", img: ""},
    "quick-add-menu" : {lnk: "https://raw.githubusercontent.com/Varrox/Quick-Add-Menu/main/README.md", img: ""},
    "ascii-renderer" : {lnk: "https://raw.githubusercontent.com/Varrox/ASCII-Renderer/main/README.md", img: ""}
}

async function apply_md()
{
    const elements = document.getElementsByClassName("md")
    for(var i = 0; i < elements.length; i++){
        await change_to_md(elements[i]);
    }
}

async function change_to_md(element){
    let linkKey = ""
    let classes = element.classList;
    for(var i = 0; i < classes.length; i++){
        if(classes[i] != "md" && Object.keys(mds).includes(classes[i])){
            linkKey = classes[i]
            break;
        }
    }

    if (!linkKey) return;

    try {
        const response = await fetch(mds[linkKey].lnk);

        if (!response.ok) {
            throw new Error(`Failed to fetch ${linkKey}: ${response.status}`);
        }

        const markdownText = await response.text();

        element.innerHTML = convert_md_to_html(markdownText);
    } catch (error) {
        console.error("Fetch error:", error);
        element.innerHTML = "<em>Failed to load content.</em>";
    }
}

function setup_code_areas() 
{
	var code_sections = document.getElementsByClassName("code")

	for (var i = 0; i < code_sections.length; i++) {
		code_snips[i] = code_sections[i].textContent

		switch(code_sections[i].getAttribute("id")) // Apply code color coating
		{
			case "py":
				code_sections[i].innerHTML = python(code_sections[i].innerHTML)
				break
			case "cs":
				code_sections[i].innerHTML = python(code_sections[i].innerHTML)
				break
			case "gdscript":
				code_sections[i].innerHTML = python(code_sections[i].innerHTML)
				break
			case "html":
				code_sections[i].innerHTML = html(code_sections[i].innerHTML)
				break
		}
		
		code_sections[i].innerHTML = "<button class=\"copy\" onclick=\"copyToClipboard(code_snips[" + i + "]);\">Copy</button>" + code_sections[i].innerHTML
	}

	var code_parts = document.getElementsByClassName("codesnip")

	for(var i = 0; i < code_parts.length; i++)
	{
		code_parts[i].setAttribute("onclick", "copyToClipboard(\"" + code_parts[i].textContent + "\")")
	}
}

function setup_page_buttons(){
	page_buttons = document.getElementsByClassName("page")

	for (var i = 0; i < page_buttons.length; i++){
		var b = page_buttons[i].className.replace("page ", "")
		console.log(b)
		page_buttons[i].addEventListener("click", function(){window.location.href = b})
	}
}

async function copyToClipboard(textToCopy) 
{
	if (textToCopy == undefined) {
		return;
	}

	try {
		navigator.clipboard.writeText(textToCopy);
		console.log('Text copied to clipboard');
	} catch (err) {
		console.error('Failed to copy text: ', err);
	}
}