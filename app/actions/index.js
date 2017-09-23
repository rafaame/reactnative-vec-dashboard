import * as DashboardActions from './dashboard';
import * as GeneralActions from './general';
import * as AdvancedActions from './advanced';

export const ActionCreators = Object.assign({},
    DashboardActions,
    GeneralActions,
    AdvancedActions
);
