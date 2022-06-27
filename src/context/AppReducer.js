export default (state, action) => {
  switch(action.type) {
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      }
    case 'CHANGE_TASK_STATE':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return {
              ...task,
              isComplete: !task.isComplete
            }
          } else {
            return task;
          }
        })
      }
    case 'SORT_BY_NAME':
      return {
        ...state,
        tasks: state.tasks.sort((task1, task2) => task1.text.localeCompare(task2.text))
      }
    case 'SORT_BY_DEADLINE':
      return {
        ...state,
        tasks: state.tasks.sort((task1, task2) => {
          const time1 = new Date(`${task1.deadline.month}/${task1.deadline.day}/${task1.deadline.year}`);
          const time2 = new Date(`${task2.deadline.month}/${task2.deadline.day}/${task2.deadline.year}`);
          if (time1 < time2) return -1;
          else if (time1 > time2) return 1;
          else return 0;
        })
      }

    case 'FILTER_DATE':
      const deadlineValue = action.payload.split('-');
      const date = new Date(`${deadlineValue[1]}/${deadlineValue[2]}/${deadlineValue[0]}`);

      return {
        ...state,
        tasks: state.tasks.map(task => {
          const deadline = new Date(`${task.deadline.month}/${task.deadline.day}/${task.deadline.year}`);

          if (!(deadline < date) && !(deadline > date)) {
            return {
              ...task,
              hidden: false
            }
          } else {
            return {
              ...task,
              hidden: true
            }
          }
        })
      }

      case 'SHOW_COMPLETE':
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if (task.isComplete) {
              return {
                ...task,
                hidden: false
              }
            } else {
              return {
                ...task,
                hidden: true
              }
            }
          })
        }

      case 'SHOW_INCOMPLETE':
        return {
          ...state,
          tasks: state.tasks.map(task => {
            if (!task.isComplete) {
              return {
                ...task,
                hidden: false
              }
            } else {
              return {
                ...task,
                hidden: true
              }
            }
          })
        }

      case 'SHOW_TOTAL':
        return {
          ...state,
          tasks: state.tasks.map(task => {
            return {
              ...task,
              hidden: false
            }
          })
        }

    default:
      return state;
  }
}