var lowestCommonAncestor = function(root, p, q) {
  const _max = Math.max(p.val, q.val); //setting constraints
        const _min = Math.min(p.val, q.val);
        while (root != null) { 
            if (_min > root.val) {  //invert the nodes in a binary tree, and traverse tree node, where in this case, it will recursively check if the left and right sub-trees are also binary trees themselves. 

                root = root.right; 
            } else if (_max < root.val) {  ///invert the nodes in a binary tree, and traverse tree node, where in this case, it will  recursively check if the left and right sub-trees are also binary trees themselves
                root = root.left;
            } else {
                return root;     
            } 
        }
        return null;   // root!= null, return null, hence if a binary tree node is NULL then it is a full binary tree. 
    }


/*
Success
Details 
Runtime: 92 ms, faster than 84.27% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
Memory Usage: 49.2 MB, less than 14.84% of JavaScript online submissions for Lowest Common Ancestor of a Binary Search Tree.
*/
