function constructionCrew(object) {
      if (!object.dizziness) {
            return object;
      }
      const neededWater = 0.1 * object.weight * object.experience;
      object.levelOfHydrated += neededWater;
      object.dizziness = false;
      return object;
}
constructionCrew({
      weight: 80,
      experience: 1,
      levelOfHydrated: 0,
      dizziness: true
});

constructionCrew({
      weight: 120,
      experience: 20,
      levelOfHydrated: 200,
      dizziness: true
});

constructionCrew({
      weight: 95,
      experience: 3,
      levelOfHydrated: 0,
      dizziness: false
});