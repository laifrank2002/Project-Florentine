/**
	Testing the inventory system.
	@author laifrank2002 
	@date 2020-01-02
 */
var TestInventory = (
	function()
	{
		Engine.log("Adding tests for Inventory...");
		var testItem1 = new InventoryItem(0);
		var testItem2 = new InventoryItem(1);
		var testItem3 = new InventoryItem(2);
		var testItem4 = new InventoryItem(3);
		
		/*
			Tests the function Inventory.addItem(item) by adding an item, then seeing if it gets the right one. 
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestAddItem()
		{
			var testInventory = new Inventory();
			var testItem = new InventoryItem(0);
			testInventory.addItem(testItem);
			return testInventory.containsItem(testItem);
		}
		
		/*
			Tests the function Inventory.insertItem(item, index) by checking if an item is added to the right index.
			@author laifrank2002 
			@date 2020-01-03
		 */
		function TestInsertItem()
		{
			var testInventory = new Inventory();
			testInventory.addItem(testItem1);
			testInventory.addItem(testItem2);
			testInventory.addItem(testItem3);
			testInventory.insertItem(testItem4, 1);
			return testInventory.getIndexOfItem(testItem4);
		}
		
		/*
			Tests the function Inventory.getLength() by creating a test inventory, adding a few items, then seeing if the length returned is the correct one.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestGetLength()
		{
			var testInventory = new Inventory();
			testInventory.addItem(testItem1);
			testInventory.addItem(testItem2);
			testInventory.addItem(testItem3);
			testInventory.addItem(testItem4);
			return testInventory.getLength();
		}
		
		/*
			Tests the function Inventory.getItemByKey(key) by adding an item, the seeing if it gets the right one.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestGetItemByKey()
		{
			var testInventory = new Inventory();
			testInventory.addItem(testItem1);
			return testInventory.getItemByKey(testItem1.key);
		}
		
		/*
			Tests the function getItemByIndex(index) by creating a test Inventory, adding items in the right order, and seeing if that order is preserved.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestGetItemByIndex()
		{
			var testInventory = new Inventory();
			testInventory.addItem(testItem1);
			testInventory.addItem(testItem2);
			testInventory.addItem(testItem3);
			testInventory.addItem(testItem4);
			return testInventory.getItemByIndex(1);
		}
		
		/*
			Tests the function getCapacity() by creating a test Inventory, assigning a capacity, and then seeing if that inventory was assigned correctly.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestGetCapacity()
		{
			var testInventory = new Inventory(20);
			return testInventory.getCapacity();
		}
		
		/*
			Tests the function setCapacity() by creating a test Inventory, assigning a capacity, and then seeing if that inventory was assigned correctly.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestSetCapacity()
		{
			var testInventory = new Inventory(10);
			testInventory.setCapacity(20);
			return testInventory.getCapacity();
		}
		
		/*
			Teste the function Inventory.removeItem(item) by first adding, then removing an item and seeing if it still exists.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestRemoveItem()
		{
			var testInventory = new Inventory();
			testInventory.addItem(testItem1);
			testInventory.removeItem(testItem1);
			return testInventory.containsItem(testItem1);
		}
		
		/*
			Tests the function Inventory.removeItemByKey(key) by first adding, then removing an item, and seeing if it still exists by key.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestRemoveItemByKey()
		{
			var testInventory = new Inventory();
			testInventory.addItem(testItem1);
			testInventory.removeItemByKey(testItem1.key);
			return testInventory.containsItem(testItem1);
		}
		
		/*
			Tests the function Inventory.removeItemByIndex(index) by first adding two elements, then seeing if the second element still exists.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestRemoveItemByIndex()
		{
			var testInventory = new Inventory();
			testInventory.addItem(testItem1);
			testInventory.addItem(testItem2);
			testInventory.addItem(testItem3);
			testInventory.addItem(testItem4);
			testInventory.removeItemByIndex(1);
			return testInventory.containsItem(testItem2);
		}
		
		/*
			Tests the function Inventory.containsItem(item) by adding and then checking if an item is contained within.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestContainsItem()
		{
			var testInventory = new Inventory();
			testInventory.addItem(testItem1);
			return testInventory.containsItem(testItem1);
		}
		
		/*
			Tests the function Inventory.containsItemByKey(key) by adding and then checking if an item is contained within.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestContainsItemByKey()
		{
			var testInventory = new Inventory();
			testInventory.addItem(testItem1);
			return testInventory.containsItemByKey(testItem1.key);
		}
		
		/*
			Tests the function Inventory.getIndexOfItem(item) by creating a test inventory and then seeing if the new index is correct.
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestGetIndexOfItem()
		{
			var testInventory = new Inventory();
			testInventory.addItem(testItem1);
			testInventory.addItem(testItem2);
			testInventory.addItem(testItem3);
			testInventory.addItem(testItem4);
			return testInventory.getIndexOfItem(testItem2);
		}
		
		/*
			Tests the function Inventory.getIndexOfItemByKey(key) by creating a test inventory and then seeing if the new index is correct. 
			@author laifrank2002 
			@date 2020-01-02
		 */
		function TestGetIndexOfItemByKey()
		{
			var testInventory = new Inventory();
			testInventory.addItem(testItem1);
			testInventory.addItem(testItem2);
			testInventory.addItem(testItem3);
			testInventory.addItem(testItem4);
			return testInventory.getIndexOfItemByKey(testItem2.key);
		}
		
		// tests 
		TestingManager.addTest("TestInventoryAddItem", TestAddItem, true);
		TestingManager.addTest("TestInventoryInsertItem", TestInsertItem, 1);
		TestingManager.addTest("TestInventoryGetLength", TestGetLength, 4);
		TestingManager.addTest("TestInventoryGetItemByKey", TestGetItemByKey, testItem1);
		TestingManager.addTest("TestInventoryGetItemByIndex", TestGetItemByIndex, testItem2);
		TestingManager.addTest("TestInventoryGetCapacity", TestGetCapacity, 20);
		TestingManager.addTest("TestInventorySetCapacity", TestSetCapacity, 20);
		TestingManager.addTest("TestInventoryRemoveItem", TestRemoveItem, false);
		TestingManager.addTest("TestInventoryRemoveItemByKey", TestRemoveItemByKey, false);
		TestingManager.addTest("TestInventoryRemoveItemByIndex", TestRemoveItemByIndex, false);
		TestingManager.addTest("TestInventoryContainsItem", TestContainsItem, true);
		TestingManager.addTest("TestInventoryContainsItemByKey", TestContainsItemByKey, true);
		TestingManager.addTest("TestInventoryGetIndexOfItem", TestGetIndexOfItem, 1);
		TestingManager.addTest("TestInventoryGetIndexOfItemByKey", TestGetIndexOfItemByKey, 1);
	}
);