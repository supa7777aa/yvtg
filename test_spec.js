var logger = require('..//..//po/log.js');


describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('http://www.angularjs.org');
	logger.log('info','Redirecting to url');
	browser.driver.manage().window().maximize();
	logger.log('info','Maximizing the window');
	
	browser.sleep(4000);
	
    element(by.model('yourName')).sendKeys('Julie');

    var greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  describe('todo list', function() {
    var todoList;

    beforeEach(function() {
      browser.get('http://www.angularjs.org');
	  logger.log('info','Redirecting to url');
	  console.log("Before Each Execution");
      todoList = element.all(by.repeater('todo in todoList.todos'));
	  logger.log('info','Getting all todo in array');
    });
	
	
	afterEach(function(){		
		console.log("After Each Execution");	
	});
	
	afterAll(function(){
		browser.close();
		console.log("After All");
	});

    it('should list todos', function() {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an AngularJS app');
	  expect(todoList.get(0).getText()).toEqual('learn AngularJS');
    });

    it('should add a todo', function() {
      var addTodo = element(by.model('todoList.todoText'));
      var addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();
      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
  });
});

