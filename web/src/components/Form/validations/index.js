import * as validators from './validator'
import { ImproperConfiguration } from '@/Exceptions'

/**
 * The method that picks up the validator respective to the string passed
 * Throw an error if no validator found
 * @param {String} validator 
 * @returns {function} - The validator mapped with the provided string
 */
export default function getValidator(validator) {
    try {
        return validators[validator + 'Validator']
    }
    catch(exception) {
        console.log("Exception", exception)
        throw new ImproperConfiguration('validator not found')
    }
}
