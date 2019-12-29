/**
	The comprehensive solution to messing about with DOM elements.
	Creates custom display elements so that our lives are made much easier.
	@author laifrank2002
	@date 2019-12-04
 */
var DOMManager = (
	function()
	{
		var content = null;
		var elements;
		return {
			/**
				Sets the content to something.
			 */
			initialize: function()
			{
				content = document.createElement("div");
				elements = [];
			},
		}
	}
)();

/* Complex components */

function DOMDisplay()
{
	this.element = document.createElement("div");
}

/**
	A number used in displaying numbers. 
	@author laifrank2002
	@date 2019-12-05
 */
function DOMNumber(text = '',value = 0)
{
	this.element = document.createElement("p");
	this.element.appendChild(document.createTextNode(`${text}: `));
	this.number = document.createElement("span");
	this.number.appendChild(document.createTextNode(`${value}`));
	this.element.appendChild(this.number);
}