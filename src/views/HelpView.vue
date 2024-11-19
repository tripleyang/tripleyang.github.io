<template>
  <p>[WIP]</p>
  <p
    >This page contains some theory that has been developed for Triple Yang,
    with help of community members on Discord.</p
  >
  <p>
    To give you a chance to discover it on your own, all information is placed
    in collapsed sections. Each step of the theory will consist of 3 sections:
    <b>Hint</b>, <b>Statement</b>, and <b>Proof</b>. You can start with the
    hints: each hint will give you a question to consider.
  </p>
  <section>
    <h1>Theorem 1</h1>
    <details>
      <summary>Hint</summary>
      Are checkerboard 2x2 arrangements possible? What can you say about the
      missing cell in this example?
      <img src="/help/help1.png" />
    </details>

    <details>
      <summary>Statement</summary>
      <p>Checkerboard arrangements with 2 colors are <em>impossible</em>.</p>
      <p>Checkerboard arrangements with 3 colors are <em>possible</em>.</p>
    </details>
    <details>
      <summary>Proof</summary>
      <p
        >In the example image, assume the missing cell is green. Then, the path
        connecting the two red cells will necessarily wrap around one of the
        green cells and isolate it from the other.</p
      >
      <p
        >Assume the missing cell is blue. The same logic applies, but there's
        actually no contradiction. However, it can be seen that the red path
        will instead separate green and blue from each other.</p
      >
      <p>An example can be found in puzzle 7x7 #28.</p>
    </details>
  </section>
  <section>
    <h1>Theorem 2</h1>
    <details>
      <summary>Hint 1</summary>
      What can you say about the border of the puzzle? By 'border', we mean the
      cells immediately adjacent to the edges, including the corners.
    </details>
    <details>
      <summary>Hint 2</summary>
      Consider the border as a circle that is split into several arcs, each
      consisting of cells of the same color. What can you say about these arcs?
    </details>
    <details>
      <summary>Hint 3</summary>
      Unlike in Yin-Yang, there are multiple answers.
    </details>
    <details>
      <summary>Statement</summary>
      The border of the puzzle can take 4 basic forms. We can label them A, AB,
      ABC, and ABAC.
      <img src="/help/help2.png" />
    </details>
    <details>
      <summary>Proof</summary>
      <p
        >ABC is the most common arrangement, you've likely seen it already. We
        should check if the simpler A and AB are possible too, but it's not
        difficult to find examples:</p
      >
      <p>Arrangement AB can be found in 5x5 #9. </p>
      <p
        >I don't recall seeing arrangement A in the collection, but it's trivial
        to construct a 5x5 solution consisting of 3 rings.</p
      >
      <p
        >The question is, is it possible for the border to contain 2 separate
        arcs of the same color?</p
      >
      <p
        >If the border contains ABA, then the 2 A arcs are connected by a path
        that necessarily wraps around B. Therefore, color B will be confined to
        an area limited by A and the board edge. The remaining color C has to be
        found either on the same side as B, or on the other side. If it's on the
        same side, then the opposite side is empty, so the border is actually
        AB. If C is on the other side from B, then A splits B from C entirely,
        meaning the puzzle consists of a "wall" of B and two "lands", each
        consisting of B and only one other color.
      </p>
      <p
        >If the arrangement described above is formed with B acting as the wall,
        it can't be simultaneously true with another color acting as the wall.
        Therefore, it's only possible for one color at a time to have 2 separate
        arcs on the border; A and C can not repeat. Therefore, the only such
        border configuration possible is ABAC.</p
      >
    </details>
  </section>
  <section>
    <h1>Theorem 3</h1>
    <details>
      <summary>Hint 1</summary>
      <p
        >Define a <em>triple point</em> as a vertex that touches at least 1 cell
        of each color.</p
      >
      <p
        >Can you say something about triple points? How many can the solution
        have?</p
      >
    </details>
    <details>
      <summary>Hint 2</summary>
      Consider <em>edges</em> (lines between cells). Some edges are between
      cells of two different colors. We can label them according to these
      colors: RG edges, RB edges, and GB edges. We can also color them with
      Yellow, Magenta, and Cyan respectively.
    </details>
    <details>
      <summary>Hint 3</summary>
      Triple points are points where edges of all 3 colors meet.
    </details>
    <details>
      <summary>Hint 4</summary>
      To make further progress, consider different cases in Theorem 2. For now,
      you can safely ignore the rule forbidding 2x2 squares of the same color.
    </details>
    <details>
      <summary>Statement</summary>
      <p>A puzzles have either 0 or 2 triple points.</p>
      <p
        >AB puzzles have either 0 or 2 triple points, or instead a single
        <em>quadruple point</em>, which is a point where 3 colors meet in a
        checkerboard pattern.</p
      >
      <p>ABC puzzles always have 1 triple point.</p>
      <p>ABAC puzzles always have 0 triple points.</p>
    </details>
    <details>
      <summary>Proof</summary>
      The proof is by contemplation of the following diagram:
      <img src="/help/help3.png" />
      Prolonged contemplation will confirm these are the only possible
      configurations.
    </details>
  </section>
</template>
<style lang="css" scoped>
details {
  @apply space-y-1 rounded-md bg-slate-100 p-2 shadow-sm;
}

details summary {
  @apply font-semibold;
}

img {
  @apply rounded-md;
}

h1 {
  @apply p-2 font-semibold;
}

section {
  @apply flex flex-col gap-1 rounded-md bg-slate-200 p-1 shadow-md;
}
</style>
