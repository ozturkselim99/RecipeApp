/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRecipe = /* GraphQL */ `
  subscription OnCreateRecipe {
    onCreateRecipe {
      id
      title
      description
      image
      steps {
        items {
          id
          description
          images
          createdAt
          updatedAt
        }
        nextToken
      }
      category {
        id
        title
        image
        recipe {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      country {
        id
        flag
        name
        recipes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      userId
      user {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userId
          recipeId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRecipe = /* GraphQL */ `
  subscription OnUpdateRecipe {
    onUpdateRecipe {
      id
      title
      description
      image
      steps {
        items {
          id
          description
          images
          createdAt
          updatedAt
        }
        nextToken
      }
      category {
        id
        title
        image
        recipe {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      country {
        id
        flag
        name
        recipes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      userId
      user {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userId
          recipeId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRecipe = /* GraphQL */ `
  subscription OnDeleteRecipe {
    onDeleteRecipe {
      id
      title
      description
      image
      steps {
        items {
          id
          description
          images
          createdAt
          updatedAt
        }
        nextToken
      }
      category {
        id
        title
        image
        recipe {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      country {
        id
        flag
        name
        recipes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      userId
      user {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      likes {
        items {
          id
          userId
          recipeId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStep = /* GraphQL */ `
  subscription OnCreateStep {
    onCreateStep {
      id
      description
      recipe {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        userId
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      images
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStep = /* GraphQL */ `
  subscription OnUpdateStep {
    onUpdateStep {
      id
      description
      recipe {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        userId
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      images
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStep = /* GraphQL */ `
  subscription OnDeleteStep {
    onDeleteStep {
      id
      description
      recipe {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        userId
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      images
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      title
      image
      recipe {
        items {
          id
          title
          description
          image
          userId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      title
      image
      recipe {
        items {
          id
          title
          description
          image
          userId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      title
      image
      recipe {
        items {
          id
          title
          description
          image
          userId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCountry = /* GraphQL */ `
  subscription OnCreateCountry {
    onCreateCountry {
      id
      flag
      name
      recipes {
        items {
          id
          title
          description
          image
          userId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCountry = /* GraphQL */ `
  subscription OnUpdateCountry {
    onUpdateCountry {
      id
      flag
      name
      recipes {
        items {
          id
          title
          description
          image
          userId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCountry = /* GraphQL */ `
  subscription OnDeleteCountry {
    onDeleteCountry {
      id
      flag
      name
      recipes {
        items {
          id
          title
          description
          image
          userId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      email
      fullname
      avatar
      recipes {
        items {
          id
          title
          description
          image
          userId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      likes {
        items {
          id
          userId
          recipeId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      email
      fullname
      avatar
      recipes {
        items {
          id
          title
          description
          image
          userId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      likes {
        items {
          id
          userId
          recipeId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      email
      fullname
      avatar
      recipes {
        items {
          id
          title
          description
          image
          userId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      likes {
        items {
          id
          userId
          recipeId
          createdAt
          updatedAt
        }
        nextToken
        scannedCount
        count
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFollowing = /* GraphQL */ `
  subscription OnCreateFollowing {
    onCreateFollowing {
      id
      followerId
      followingId
      follower {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      following {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateFollowing = /* GraphQL */ `
  subscription OnUpdateFollowing {
    onUpdateFollowing {
      id
      followerId
      followingId
      follower {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      following {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteFollowing = /* GraphQL */ `
  subscription OnDeleteFollowing {
    onDeleteFollowing {
      id
      followerId
      followingId
      follower {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      following {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike {
    onCreateLike {
      id
      userId
      recipeId
      recipe {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        userId
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike {
    onUpdateLike {
      id
      userId
      recipeId
      recipe {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        userId
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike {
    onDeleteLike {
      id
      userId
      recipeId
      recipe {
        id
        title
        description
        image
        steps {
          nextToken
        }
        category {
          id
          title
          image
          createdAt
          updatedAt
        }
        country {
          id
          flag
          name
          createdAt
          updatedAt
        }
        userId
        user {
          id
          email
          fullname
          avatar
          createdAt
          updatedAt
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      user {
        id
        email
        fullname
        avatar
        recipes {
          nextToken
          scannedCount
          count
        }
        likes {
          nextToken
          scannedCount
          count
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
