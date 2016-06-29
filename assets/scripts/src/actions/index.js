export const addItem = (value, label, id, choiceId) => {
    return {
        type: 'ADD_ITEM',
        value,
        label,
        id,
        choiceId,
    }
};

export const removeItem = (id, choiceId) => {
    return {
        type: 'REMOVE_ITEM',
        id,
        choiceId,
    }
};

export const selectItem = (id, selected) => {
    return {
        type: 'SELECT_ITEM',
        id,
        selected,
    }
};

export const addChoice = (value, label, id, groupId, disabled) => {
    return {
        type: 'ADD_CHOICE',
        value,
        label,
        id,
        groupId,
        disabled,
    }
};

export const filterChoices = (results) => {
    return {
        type: 'FILTER_CHOICES',
        results,
    }
};

export const activateChoices = (active = true) => {
    return {
        type: 'ACTIVATE_CHOICES',
        active,
    }
};

export const addGroup = (value, id, active, disabled) => {
    return {
        type: 'ADD_GROUP',
        value,
        id,
        active,
        disabled,
    }
};

export const clearAll = () => {
    return {
        type: 'CLEAR_ALL',
    }
};