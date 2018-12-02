(ns advent-of-code.day-two-test
  (:require [advent-of-code.day-two :refer :all]
            [clojure.test :as t]))

(def day-input "./test/advent_of_code/input/day_two_input")
(def test-input "./test/advent_of_code/input/day_two_test")
(def day-input2 "./test/advent_of_code/input/day_two_input2")
(def test-input2 "./test/advent_of_code/input/day_two_test2")

(t/deftest day-two-test
  (t/testing "First Solution"
    (t/is (= 12 (solve-first-problem test-input)))
    (t/is (= 5368 (solve-first-problem day-input))))

  (t/testing "Second Solution"
    (t/is (= 12 (solve-first-problem test-input2)))
    (t/is (= 5368 (solve-first-problem day-input2)))))
