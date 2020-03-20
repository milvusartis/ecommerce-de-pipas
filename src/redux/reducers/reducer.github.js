
import  {GithubActionsType} from '../../redux/actions/actions-type'

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function githubReducer(state = INITIAL_STATE, action) {

  const data = action.payload;
  console.log(data)
  switch (action.type) {
    case GithubActionsType.REQUEST_TODO_LIST:
      return { ...state, loading: true };
    case GithubActionsType.SUCCESS_TODO_LIST:
      return { data: action.payload.data, loading: false, error: false };
    case GithubActionsType.FAILURE_TODO_LIST:
      return { data: [], loading: false, error: true };
    default:
      return state;
  }
}
