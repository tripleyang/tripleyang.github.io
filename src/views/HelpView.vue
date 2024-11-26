<script setup lang="ts">
import AppLink from "@/components/AppLink.vue";
</script>

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
      Consider <em>edges</em> (lines between cells). We'll refer to an edge as a
      <em>splitting edge</em> if it has 2 different colors to each side of it.
      We can label them according to these colors: RG edges, RB edges, and GB
      edges. We can also color them with Yellow, Magenta, and Cyan respectively.
    </details>
    <details>
      <summary>Hint 3</summary>
      Triple points are points where 3 splitting edges meet.
    </details>
    <details>
      <summary>Hint 4</summary>
      To make further progress, consider different cases in Theorem 2. For now,
      you can safely ignore the rule forbidding 2x2 squares of the same color.
    </details>
    <details>
      <summary>Hint 5</summary>
      <p
        >Oh, by the way, do you remember the checkerboard configuration from
        Theorem 1? The vertex in the middle does touch all 3 colors, however, it
        also meets 4 splitting edges.</p
      >

      <p
        >From now on, we'll refer to such vertices as <em>quadruple points</em>,
        and the term <em>triple point</em> will only be used for points that
        meet 3 splitting edges. This distinction will be important.</p
      >
    </details>
    <details>
      <summary>Statement</summary>
      <p
        >A puzzles have either 0 triple points, 2 triple points, or 1 quadruple
        point.</p
      >
      <p
        >A puzzles have either 0 triple points, 2 triple points, or 1 quadruple
        point.</p
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
  <section>
    <h1>Theorem 4</h1>
    <details>
      <summary>Hint</summary>
      We'll call this the Parity Theorem. Unfortunately, I think this one is too
      hard to really guide you through with hints. You can try reading about the
      related theorem for Yin-Yang
      <AppLink
        href="https://puzzling.stackexchange.com/questions/53193/a-problem-about-yin-yang-puzzles"
        >here</AppLink
      >.
    </details>
    <details>
      <summary>Proof, step 1</summary>
      <p
        >To get started, let's color the vertices in a checkerboard pattern like
        this:</p
      >
      <div class="flex flex-row items-start gap-2"
        ><img src="/help/help4.png" /> <img src="/help/help5.png"
      /></div>
      <p
        >Notice that if the board is of a Even x Even size, there will be 1 more
        black vertex than there will be white vertices; if the board is of a
        different size, there will be equally many black and white vertices
        (this includes Odd x Odd and Odd x Even boards).</p
      >
      <p
        >We will need to account for this relationship. We don't really need to
        know how many there are of each color, but it's important that there's
        either the same number or one more black.</p
      >
      <p
        >To make it easier to track this, we can introduce the following
        concept.</p
      >
      <p
        ><b>Definition.</b> For a set of vertices, its
        <em>characteristic</em> is the integer number equal to B - W, where B is
        the number of black vertices in the set, and W is the number of white
        vertices in the set.</p
      >
      <p
        >In other words, each black vertex has characteristic +1, and each white
        vertex has characteristic -1.</p
      >
      <p
        ><b>Lemma 1.</b> The set of all vertices has characteristic +1 on Even x
        Even boards, and 0 otherwise. Proof is left as an exercise for the
        reader.</p
      >
      <p
        ><b>Exercise.*</b> Use the concept of characteristic to prove the Parity
        Theorem for standard Yin-Yang. Expand it by exploring what happens on
        Odd x Odd boards.</p
      >
    </details>
    <details>
      <summary>Proof, step 2</summary>
      <p
        ><b>Lemma 2.</b> For any <em>chain of vertices</em>, its characteristic
        only depends on the color of its ends:</p
      >
      <ol class="list-inside list-decimal">
        <li>A chain of the form ⚫︎-○-⋯-⚫︎-○ has characteristic 0.</li>
        <li>A chain of the form ⚫︎-○-⋯-○-⚫︎ has characteristic +1.</li>
        <li>A chain of the form ○-⚫︎-⋯-⚫︎-○ has characteristic -1.</li>
      </ol>
      <p>Proof is left as an exercise for the reader.</p>
      <p
        ><b>Corollary.</b> Consider a set of vertices formed by the vertices of
        a graph, whose edges are (some of) the edges of the board. The
        characteristic of the set doesn't depend on the colors of the vertices
        of degree 2; it's enough to know the colors of the
        <em>leaves</em> (vertices with 1 edge) and the
        <em>junctions</em> (vertices with 3 or more edges), and which of them
        are connected by chains.
      </p>
      <p><b>Example.</b></p>
      <img src="/help/help6.png" />
      <p
        >This graph has 2 white leaves, 1 black leaf, and 1 white junction,
        which have a combined characteristic of -2. The rest of the vertices are
        parts of chains that connect them; each chain will connect a leaf to the
        junction. The ends of the chain will have opposite colors to the colors
        of the leaf and junction they connect; therefore, there is 1
        ⚫︎-○-⋯-⚫︎-○ chain of characteristic 0 and 2 ⚫︎-○-⋯-○-⚫︎ chains of
        characteristic +1 each. Adding everything together, we get -2 + 0 + 1 +
        1 = 0. This is the same result we get by applying Lemma 1 to the board
        of size 7x7.
      </p>
    </details>
    <details>
      <summary>Proof, step 3</summary>
      <p
        >We've now seen that vertices of degree 2 &mdash; those that belong to
        chains &mdash; don't affect the total characteristic of a graph.</p
      >
      <p
        >To fully exploit this fact, we can simply replace any chain in a graph
        with a single edge. However, now the graph can have connected vertices
        of the same color, with edges actually implying vertices of the other
        color between them. To correct this, let's extend the definition of
        characteristic to graphs:</p
      >
      <p
        ><b>Definition. </b> For a finite graph whose vertices are colored with
        Black and White, it's <em>characteristic</em> is defined as</p
      >
      <p class="text-center">B - W - BB + WW,</p>
      <p
        >where B and W are the numbers of Black and White vertices respectively,
        and BB and WW are the numbers of Black-Black and White-White edges
        respectively.</p
      >
      <p
        ><b>Lemma 3.</b> The characteristic of a graph doesn't change if any
        chain of edges is replaced with a single edge, and the vertices between
        them are deleted. It also doesn't change if any loop is discarded.</p
      >
      <p
        >In other words, White-White edges are assigned characteristic +1 and
        Black-Black edges are assigned characteristic -1 (note the opposite
        signs!). The graph from the example can be simplified like as
        follows:</p
      >
      <img src="/help/help7.png" />
    </details>
    <details>
      <summary>Proof, step 4</summary>
      <p
        ><b>Proposition 1. </b>The characteristic of a graph is equal to the sum
        ∑c(1 - d/2), taken over vertices of the graph, where c is the
        characteristic of the current vertex and d is its degree. Equivalently,
        the characteristic is equal to</p
      >
      <p class="text-center">1/2 c₁ - 1/2 c₃ - c₄ - ...,</p>
      <p>where vᵢ is the total characteristic of vertices of degree i.</p>
      <p
        ><b>Proof. </b> To prove this formula is correct, remove all edges of
        the graph first, so that the graph consists only of isolated vertices.
        In this case, the characteristic is ∑c, which matches the formula when
        d=0 for all vertices. Next, rebuild the graph by adding edges and
        observe how the characteristic of the graph changes. Adding an edge
        increases the degree of 2 vertices by 1 each, and therefore (1 - d/2) is
        decreased by 1/2 for 2 terms in the sum. If the edge is added between
        two vertices of opposite colors, the characteristic is unchanged; ∑c(1 -
        d/2) is also unchanged, because 2 terms in the sum will change by -c/2
        with v of opposite signs. If the edge is added between two black
        vertices, the characteristic is decreased by 1; ∑c(1 - d/2) is also
        decreased by 1, with 2 terms in the sum will decrease by 1/2. Similarly,
        when the edge is added between two white vertices, both increase by
        1.</p
      >
      <p
        >(now how to <em>discover</em> this formula is another story
        entirely...)</p
      >
    </details>
    <details>
      <summary>Proof, step 5</summary>
      <p>Recall the diagram from Theorem 3:</p>
      <img src="/help/help3.png" />
      <p
        >We can now see that this diagram also shows the graphs that are
        obtained by taking the set of all vertices along with all splitting
        edges as well as all border edges, and collapsing all chains. The graphs
        (before collapsing) contain all vertices on the board due to the rule
        that forbids 2x2 squares of the same color.</p
      >
      <p
        >Now we can apply Proposition 1 along with Lemma 1. Our graphs only
        contain vertices of degrees 3 and 4, so we'll discard unnecessary terms
        and multiply the equation by -2. We obtain</p
      >
      <p><b>Parity Theorem. </b> For puzzles of Even x Even sizes, </p>
      <p class="text-center">c₃ + 2c₄ = -2.</p>
      <p>For puzzles of other sizes, </p>
      <p class="text-center">c₃ + 2c₄ = 0.</p>
    </details>
    <details>
      <summary>Corollaries</summary>
      <p
        >We'll use the term <em>generalized triple point</em> for the vertices
        that are either triple points or lie on the border and touch 2 different
        colors; these are all points that have degree 3 in our graphs.</p
      >
      <p
        ><b>Corollary 1. </b> If the puzzle doesn't have a quadruple point, we
        denote with B and W the number of Black and White generalized triple
        points respectively. Then</p
      >
      <div class="flex flex-col">
        <div class="self-center">
          <p>W = B + 2, if the puzzle is Even x Even;</p>
          <p>W = B, otherwise.</p>
        </div>
      </div>
      <p
        ><b>Corollary 2.</b> The formulas in Corollary 1 also apply to cases A*
        and AB* if the quadruple point is counted as <em>two</em> generalized
        triple points.</p
      >
      <p
        ><b>Corollary 3.</b> Case A* is only possible on Even x Even boards. The
        quadruple point is always White.</p
      >
      <p><b>Corollary 4.</b> Case AB* admits the following possibilities:</p>
      <ol class="list-inside list-decimal">
        <li
          >Puzzle is Even x Even, quadruple point is White, triple points are 1
          Black, 1 White.</li
        >
        <li
          >Puzzle is Odd, quadruple point is White, triple points are both
          Black.</li
        >
        <li
          >Puzzle is Odd, quadruple point is Black, triple points are both
          White.</li
        >
      </ol>
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
