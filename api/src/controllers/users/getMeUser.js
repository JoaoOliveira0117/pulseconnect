import UserBase from './base.js';
import useController from '../../helpers/useController.js';

class GetMeUser extends UserBase {
	response() {
		return this.getUserMe();
	}
}

export default useController(GetMeUser);
