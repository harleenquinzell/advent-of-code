(ns advent-of-code.day-two-test
  (:require [advent-of-code.day-two :refer :all]
            [clojure.test :as t]))

(def day-input "./test/advent_of_code/input/day_two_input.txt")
(def test-input "./test/advent_of_code/input/day_two_test")

(t/deftest day-two-test
  (t/testing "First Solution"
    (t/is (= 12 (solve-first-problem test-input)))
    (t/is (= 5368 (solve-first-problem day-input)))))
