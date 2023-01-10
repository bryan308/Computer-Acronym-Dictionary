function find() {
	var term = document.getElementById("search").value;
	if (term == "CPU") {
	  document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'CPU\')" class="definition-link">Central Processing Unit</a>';
	}
	else if (term == "RAM") {
	  document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'RAM\')" class="definition-link">Random Access Memory</a>';
	}
	else if (term == "ROM") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'ROM\')" class="definition-link">Read-only Memory</a>';
	}
	else if (term == "GPU") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'GPU\')" class="definition-link">Graphics Processing Unit</a>';
	}
	else if (term == "HDD") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'HDD\')" class="definition-link">Hard Disk Drive</a>';
	}
	else if (term == "SSD") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'SSD\')" class="definition-link">Solid State Drive</a>';
	}
	else if (term == "USB") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'USB\')" class="definition-link">Universal Serial Bus</a>';
	}
	else if (term == "LAN") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'LAN\')" class="definition-link">Local Area Network</a>';
	}
	else if (term == "WAN") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'WAN\')" class="definition-link">Wide Area Network</a>';
	}
	else if (term == "VPN") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'VPN\')" class="definition-link">Virtual Private Network</a>';
	}
	else if (term == "HTTP") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'HTTP\')" class="definition-link">Hypertext Transfer Protocol</a>';
	}
	else if (term == "HTTPS") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'HTTPS\')" class="definition-link">HTTP Secure</a>';
	}
	else if (term == "FTP") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'FTP\')" class="definition-link">File Transfer Protocol</a>';
	}
	else if (term == "SFTP") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'SFTP\')" class="definition-link">Secure File Transfer Protocol</a>';
	}
	else if (term == "DNS") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'DNS\')" class="definition-link">Domain Name System</a>';
	}
	else if (term == "IP") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'IP\')" class="definition-link">Internet Protocol</a>';
	}
	else if (term == "TCP") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'TCP\')" class="definition-link">Transmission Control Protocol</a>';
	}
	else if (term == "UDP") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'UDP\')" class="definition-link">User Datagram Protocol</a>';
	}
	else if (term == "SMS") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'SMS\')" class="definition-link">Short Message Service</a>';
	}
	else if (term == "MMS") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'MMS\')" class="definition-link">Multimedia Messaging Service</a>';
	}
	else if (term == "HTML") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'HTML\')" class="definition-link">Hypertext Markup Language</a>';
	}
	else if (term == "XML") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'XML\')" class="definition-link">eXtensible Markup Language</a>';
	}
	else if (term == "CSS") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'CSS\')" class="definition-link">Cascading Style Sheets</a>';
	}
	else if (term == "JS") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'JS\')" class="definition-link">JavaScript</a>';
	}
	else if (term == "SQL") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'SQL\')" class="definition-link">Structured Query Language</a>';
	}
	else if (term == "API") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'API\')" class="definition-link">Application Programming Interface</a>';
	}
	else if (term == "GUI") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'GUI\')" class="definition-link">Graphical Use Interface</a>';
	}
	else if (term == "CLI") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'CLI\')" class="definition-link">Command Line Interface</a>';
	}
	else if (term == "CAD") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'CAD\')" class="definition-link">Computer-Aided Design</a>';
	}
	else if (term == "CAM") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'CAM\')" class="definition-link">Computer-Aided Manufacturing</a>';
	}
	else if (term == "CRM") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'CRM\')" class="definition-link">Costumer Relationship Management</a>';
	}
	else if (term == "AGP") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'AGP\')" class="definition-link">Accelerated Graphics Port</a>';
	}
	else if (term == "BIOS") {
		document.getElementById("acronym").innerHTML= 'Acronym: <a href="#" onclick="displayDefinition(\'BIOS\')" class="definition-link">Basic Input-Output Services</a>';
	}
	else {
	  document.getElementById("acronym").innerHTML = 'Acronym: <a href="#" onclick="sendMessage()" class="error">Sorry No acronym found or maybe it is in lowercase form.</a>';
	}
}

function displayDefinition(acronym) {
	if (acronym == "CPU") {
	  document.getElementById("definition").innerHTML = 'Definition: The Central Processing Unit is the brain of the computer. It retrieves instructions from memory and executes them.';
	}
	else if (acronym == "RAM") {
		document.getElementById("definition").innerHTML = 'Definition: Random Access Memory is a type of computer memory that can be accessed randomly, meaning that any byte of memory can be accessed without touching the preceding bytes.';
	}
	else if (acronym == "ROM") {
		document.getElementById("definition").innerHTML = 'Definition: Read-only Memory is a type of computer storage containing non-volatile, permanent data that, normally, can only be read, not written to.';
	}
	else if (acronym == "GPU") {
	  document.getElementById("definition").innerHTML = 'Definition: A Graphics Processing Unit is a specialized processor designed to handle the complex calculations needed for computer graphics.';
	}
	else if (acronym == "HDD") {
		document.getElementById("definition").innerHTML = "Definition: An HDD is a data storage device that uses magnetic disks to store and retrieve digital information.";
	}
	else if (acronym == "SSD") {
		document.getElementById("definition").innerHTML = "Definition: An SSD is a data storage device that uses solid-state memory to store and retrieve digital information.";
	}
	else if (acronym == "USB") {
		document.getElementById("definition").innerHTML = "Definition: USB is a standard that allows computers to communicate with external devices such as printers, keyboards, and mice.";
	}
	else if (acronym == "LAN") {
		document.getElementById("definition").innerHTML = "Definition: is a computer network that connects devices in a limited geographical area such as a home, school, or office building.";
	}
	else if (acronym == "WAN") {
		document.getElementById("definition").innerHTML = "Definition: is a computer network that spans a large geographical area, such as across cities or even countries.";
	}
	else if (acronym == "VPN") {
		document.getElementById("definition").innerHTML = "Definition: is a private network that is created over a public network, such as the internet. It enables users to send and receive data across shared or public networks as if their devices were directly connected to the private network.";
	}
	else if (acronym == "HTTP") {
		document.getElementById("definition").innerHTML = "Definition: is a set of rules for transferring files (such as HTML documents, images, and videos) on the World Wide Web.";
	}
	else if (acronym == "HTTPS") {
		document.getElementById("definition").innerHTML = "Definition: is a secure version of HTTP that encrypts data sent between a web server and a client.";
	}
	else if (acronym == "FTP") {
		document.getElementById("definition").innerHTML = "Definition: is a standard network protocol used to transfer files from one host to another over a TCP-based network, such as the internet.";
	}
	else if (acronym == "SFTP") {
		document.getElementById("definition").innerHTML = "Definition: is a network protocol that provides file access, file transfer, and file management over any reliable data stream. It was designed as an extension of the Secure Shell (SSH) protocol.";
	}
	else if (acronym == "DNS") {
		document.getElementById("definition").innerHTML = "Definition: is a hierarchical decentralized naming system for computers, services, or other resources connected to the internet or a private network. It translates human-readable domain names into numerical IP addresses.";
	}
	else if (acronym == "IP") {
		document.getElementById("definition").innerHTML = "Definition: An IP address is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication.";
	}
	else if (acronym == "TCP") {
		document.getElementById("definition").innerHTML = "Definition: is a set of rules for transmitting data over the internet. It divides the data into small packets and sends them separately, reassembling them at the destination.";
	}
	else if (acronym == "UDP") {
		document.getElementById("definition").innerHTML = "Definition: is a connectionless protocol that allows data to be transmitted over a network without establishing a connection.";
	}
	else if (acronym == "SMS") {
		document.getElementById("definition").innerHTML = "Definition: is a text messaging service component of most telephone, internet, and mobile-device systems. It uses standardized communication protocols to allow fixed line or mobile phone devices to exchange short text messages.";
	}
	else if (acronym == "MMS") {
		document.getElementById("definition").innerHTML = "Definition: is a standard way to send messages that include multimedia content to and from mobile phones.";
	}
	else if (acronym == "HTML") {
		document.getElementById("definition").innerHTML = "Definition: is a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.";
	}
	else if (acronym == "XML") {
		document.getElementById("definition").innerHTML = "Definition: is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.";
	}
	else if (acronym == "CSS") {
		document.getElementById("definition").innerHTML = "Definition: is a style sheet language used for describing the look and formatting of a document written in HTML.";
	}
	else if (acronym == "JS") {
		document.getElementById("definition").innerHTML = "Definition: JavaScript is a programming language that is commonly used in web development to add interactivity to websites. It is a client-side scripting language, which means that it is executed by the user's web browser rather than on the server. JavaScript is often used to create responsive and dynamic websites and applications.";
	}
	else if (acronym == "SQL") {
		document.getElementById("definition").innerHTML = "Definition: is a programming language used to manage and manipulate data stored in relational database management systems.";
	}
	else if (acronym == "API") {
		document.getElementById("definition").innerHTML = "Definition: is a set of protocols, routines, and tools for building software and applications. It specifies how software components should interact and is used to build and integrate software systems.";
	}
	else if (acronym == "GUI") {
		document.getElementById("definition").innerHTML = "Definition: is a type of user interface that allows users to interact with electronic devices through visual indicators such as windows, icons, and buttons.";
	}
	else if (acronym == "CLI") {
		document.getElementById("definition").innerHTML = "Definition: is a user interface that allows users to interact with electronic devices using commands entered through a command line or terminal.";
	}
	else if (acronym == "CAD") {
		document.getElementById("definition").innerHTML = "Definition: is the use of computer systems to assist in the creation, modification, analysis, or optimization of a design.";
	}
	else if (acronym == "CAM") {
		document.getElementById("definition").innerHTML = "Definition: is the use of computer systems to plan, coordinate, and control the operations of a manufacturing plant.";
	}
	else if (acronym == "CRM") {
		document.getElementById("definition").innerHTML = "Definition: is the practice of managing and organizing customer interactions and data throughout the customer lifecycle, with the goal of improving customer relationships and business outcomes.";
	}
	else if (acronym == "AGP") {
		document.getElementById("definition").innerHTML = "Definition: A type of video interface introduced in 1996 as an improvement to PCI. It has now been largely replaced by PCI-e.";
	}
	else if (acronym == "BIOS") {
		document.getElementById("definition").innerHTML = "This information is stored on a chip commonly referred to as the CMOS chip, which really isn't a CMOS chip at all. Usually it's a Flash-ROM chip. But they used to be CMOS chips back in the old days, and the name stuck. By whatever name, the BIOS contains the most basic information needed by the computer at the hardware level to let it know that it's a computer (rather than, for example, a toaster), how to boot up, and how to find the rest of its parts.";
	}
}

function reset() {
	// Clears the Value of Search bar
	document.getElementById("search").value = "";
	// Clears the value of definition
	document.getElementById("definition").innerHTML = "";
	// Clears the value of output Acronym
	document.getElementById("acronym").innerHTML = "Acronym:";
}

function sendMessage() {
	// Create the alert box
	var alertBox = document.createElement("div");
	alertBox.className = "alert";
  
	// Add a message
	var message = document.createTextNode("There's no Acronym appeared.");
	alertBox.appendChild(message);
  
	// Add a close button
	var closeButton = document.createElement("span");
	closeButton.className = "closebtn";
	closeButton.innerHTML = "&times;";
	alertBox.appendChild(closeButton);
  
	// Add the alert box to the page
	document.body.appendChild(alertBox);
  
	// Set the opacity of the alert box to 1 to trigger the fade-in animation
	alertBox.style.opacity = "1";
  
	// Close the alert box when the close button is clicked
	closeButton.onclick = function() {
	  alertBox.style.display = "none";
	}
}
// Event listener on Search Icon 
document.addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
    var icon = document.querySelector('.icon');
    find();
  }
});
// event listener on Reset Icon
document.addEventListener('keyup', function(event) {
    if (event.code === 'Delete') {
    var icon = document.querySelector('.icoN');
    reset();
  }
});
// Event Listener on Search bar
document.addEventListener('keyup', function(event) {
	if (event.code === '/') {
	  var input = document.getElementById("search");
	  input.focus();
	}
});
  

  