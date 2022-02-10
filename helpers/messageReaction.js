const messageReaction = {
    "🍎": (bool, member) => (bool ? member.roles.add("932687894336905266") : member.roles.remove("932687894336905266")),
    "🍌": (bool, member) => (bool ? member.roles.add("932688068924801095") : member.roles.remove("932688068924801095")),
    "🍇": (bool, member) => (bool ? member.roles.add("932687982526365776") : member.roles.remove("932687982526365776")),
    "🍑": (bool, member) => (bool ? member.roles.add("932687945457082459") : member.roles.remove("932687945457082459")),
};

module.exports = messageReaction;
