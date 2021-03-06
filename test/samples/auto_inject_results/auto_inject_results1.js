/**
 * Flow with options.autoInjectResults = true
 * 
 * @author Mohammad Fares <faressoft.com@gmail.com>
 */

/**
 * Hints for the testing suites
 * @type {Object}
 */
module.exports.hints = {};

/**
 * Flowa options
 * @type {Object}
 */
module.exports.hints.options = {
  autoInjectResults: true
};

/**
 * The context
 * @type {Object}
 */
module.exports.hints.context = {
  task1: 'result1',
  task2: 'result2',
  task3: 'result3',
  task4: 'result4',
  task5: 'result5',
  task6: 'result6',
  task7: 'result7',
  task8: 'result8',
  task9: 'result9',
  task10: 'result10',
  task11: 'result11',
  task12: 'result12',
  _task1: 1,
  _task2: 1,
  _task3: 1,
  _task4: 1,
  _task5: 1,
  _task6: 1,
  _task7: 1,
  _task8: 1,
  _task9: 1,
  _task10: 1,
  _task11: 1,
  _task12: 1
};

/**
 * The state of the context object in each event loop tick
 * @type {Array}
 */
module.exports.hints.timeline = [
  {},
  {_task1: 1},
  {task1: 'result1', _task2: 1, _task3: 1, _task4: 1, _task6: 1},
  {task2: 'result2', task3: 'result3', task4: 'result4', task6: 'result6', _task5: 1, _task7: 1},
  {task5: 'result5', task7: 'result7', _task8: 1, _task9: 1},
  {task8: 'result8', task9: 'result9', _task10: 1},
  {task10: 'result10', _task11: 1},
  {task11: 'result11', task12: 'result12', _task12: 1}
];

/**
 * The debug logs for each executed task
 * ordered as per the execution order
 * @type {Array}
 */
module.exports.hints.debugLogs = [
  'task1',
  '..task2',
  '..task3',
  '....task4',
  '....task6',
  '....task5',
  '....task7',
  '......task8',
  '......task9',
  '....task10',
  'task11',
  'task12'
];

/**
 * The flow sample
 * @type {Object}
 */
module.exports.flow = {

  type: 'serial',
  
  task1: generators.generateDummyTask(1),

  group1: {

    type: 'parallel',

    task2: generators.generateDummyTask(2),

    task3: generators.generateDummyTask(3),

    group2: {

      type: 'serial',

      task4: generators.generateDummyTask(4),

      task5: generators.generateDummyTask(5)

    },

    group3: {

      task6: generators.generateDummyTask(6),

      task7: generators.generateDummyTask(7),

      group4: {

        type: 'parallel',

        task8: generators.generateDummyTask(8),

        task9: generators.generateDummyTask(9)

      },

      task10: generators.generateDummyTask(10)

    }

  },

  task11: generators.generateDummyTask(11),

  task12: generators.generateDummyTask(12)

};
